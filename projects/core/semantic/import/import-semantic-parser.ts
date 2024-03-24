import {dirname, join, resolve} from 'path';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing, String2, nothing} from '../../lib/core';
import {$Node, is} from '../../parser/node/node';
import {PrefixNode} from '../../parser/node/syntax/prefix/prefix-node';
import {StringNode} from '../../parser/node/token/string/string-node';
import {IMPORT_CONTROL, STRING_QUOTE} from '../../parser/parser-config';
import {parseSyntax} from '../../parser/syntax';
import {SyntaxResult} from '../../parser/syntax-result';
import {sourceFromResource} from '../../source/source';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {DeclarationManager} from '../declaration-manager';
import {$Semantic, parseSemantic} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {ImportSemantic} from './import-semantic';

const LIB_FOLDER = resolve(__dirname, '../../lib');

export function syntaxImportsParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (is<PrefixNode>(statement.item, $Node.PREFIX)) {
      importNodeParse(context, statement.item);
    }
  }
}

export function importNodeParse(context: SemanticContext, node: PrefixNode): Nothing {
  if (node.operator.text !== IMPORT_CONTROL || !is<StringNode>(node.value, $Node.STRING)) {
    return;
  }

  const lastIndex = node.value.text.length > 1 && node.value.text.last() === STRING_QUOTE ? -1 : node.value.text.length;
  const reference = context.createReference(node.value);
  const importString = node.value.text.slice(1, lastIndex);
  const location = normalizeImportString(importString, context.source.location);
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

  if (!context.declarationManager.imports) {
    context.declarationManager.imports = [];
  }

  context.declarationManager.imports.push(declarationManager);
}

export function declarationManagerFromImportString(importString: String2): DeclarationManager | Nothing {
  const location = normalizeImportString(importString);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    return nothing;
  }

  const source = sourceFromResource(resource);
  const syntax = parseSyntax(source);
  const {declarationManager} = parseSemantic(syntax);

  return declarationManager;
}

function normalizeImportString(location: String2, targetSourceLocation?: String2 | Nothing): String2 {
  const locationWithExtension = location + '.xon';

  if (location.startsWith('/') || location.startsWith('.')) {
    if (targetSourceLocation) {
      return join(dirname(targetSourceLocation), locationWithExtension);
    }

    return locationWithExtension;
  }

  // todo handle additional extension or other formats (json, other data files...)
  return join(LIB_FOLDER, locationWithExtension);
}
