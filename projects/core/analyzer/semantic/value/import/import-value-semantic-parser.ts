import {dirname, join, resolve} from 'path';
import {Nothing, String2, nothing} from '../../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {textResourceFromFilePath} from '../../../../util/resource/text/text-resource';
import {$Node, Node, is} from '../../../node/node';
import {ImportNode} from '../../../node/syntax/import/import-node';
import {SyntaxResult} from '../../../syntax-context';
import {syntaxParse} from '../../../syntax-parser';
import {DeclarationManager} from '../../declaration-manager';
import {semanticParse} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {ImportValueSemantic, importValueSemantic} from './import-value-semantic';

const LIB_FOLDER = resolve(__dirname, '../../../../../lib');

export function syntaxImportsParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (is<ImportNode>(statement.value, $Node.IMPORT)) {
      importValueSemanticTryParse(context, statement.value);
    }
  }
}

export function importValueSemanticTryParse(
  context: SemanticContext,
  node: Node,
): ImportValueSemantic | Nothing {
  if (!is<ImportNode>(node, $Node.IMPORT)) {
    return nothing;
  }

  if (!node.value) {
    return importValueSemantic(context.createReference(node), nothing);
  }

  const location = normalizeImportString(node.value.value, context.resource.location);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.cannotFindResource(location));

    return;
  }

  const syntax = syntaxParse(resource);
  const {declarationManager} = semanticParse(syntax);

  if (!context.declarationManager.imports) {
    context.declarationManager.imports = [];
  }

  context.declarationManager.imports.push(declarationManager);

  return importValueSemantic(context.createReference(node));
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
