import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing} from '../../lib/core';
import {$Node, is} from '../../parser/node/node';
import {PrefixNode} from '../../parser/node/syntax/prefix/prefix-node';
import {StringLiteralNode} from '../../parser/node/token/literal/string/string-literal-node';
import {IMPORT_CONTROL, STRING_QUOTE} from '../../parser/parser-config';
import {parseSyntax} from '../../parser/syntax';
import {SyntaxResult} from '../../parser/syntax-result';
import {sourceFromResource} from '../../source/source';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {$Semantic, parseSemantic} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {ImportSemantic} from './import-semantic';

export function syntaxImportsParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (is<PrefixNode>(statement.item, $Node.PREFIX)) {
      importNodeParse(context, statement.item);
    }
  }
}

export function importNodeParse(context: SemanticContext, node: PrefixNode): Nothing {
  if (node.operator.text !== IMPORT_CONTROL || !is<StringLiteralNode>(node.value, $Node.STRING)) {
    return;
  }

  const lastIndex = node.value.text.length > 1 && node.value.text.last() === STRING_QUOTE ? -1 : node.value.text.length;
  const reference = context.createReference(node.value);
  const location = node.value.text.slice(1, lastIndex);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.cannotFindResource(location));

    return;
  }

  const semantic: ImportSemantic = {
    $: $Semantic.IMPORT,
    reference,
    resource,
  };

  node.value.semantic = semantic;

  const source = sourceFromResource(resource);

  const syntax = parseSyntax(source);
  const {declarationManager} = parseSemantic(syntax);

  for (const declaration of declarationManager.all()) {
    context.declarationManager.add(declaration);
  }
}
