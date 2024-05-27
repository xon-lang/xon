import {dirname, join, resolve} from 'path';
import {SyntaxResult} from '../../../core/parser/syntax-context';
import {Nothing, String2, nothing} from '../../../lib/types';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {$Node, is} from '../../parser/node/node';
import {ImportNode} from '../../parser/node/syntax/import/import-node';
import {StringNode} from '../../parser/node/token/string/string-node';
import {syntaxParse} from '../../parser/syntax-parser';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {DeclarationManager} from '../declaration-manager';
import {$Semantic, semanticParse} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {ImportSemantic} from './import-semantic';

const LIB_FOLDER = resolve(__dirname, '../../../lib');

export function syntaxImportsParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (is<ImportNode>(statement.value, $Node.IMPORT)) {
      importNodeParse(context, statement.value);
    }
  }
}

export function importNodeParse(context: SemanticContext, node: ImportNode): Nothing {
  if (!is<StringNode>(node.value, $Node.STRING)) {
    return;
  }

  const reference = context.createReference(node.value);
  const location = normalizeImportString(node.value.value, context.resource.location);
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

  const syntax = syntaxParse(resource);
  const {declarationManager} = semanticParse(syntax);

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

  const syntax = syntaxParse(resource);
  const {declarationManager} = semanticParse(syntax);

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
