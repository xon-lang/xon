import {dirname, join, resolve} from 'path';
import {Array2, Nothing, String2, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {zeroPosition} from '../../../../../util/resource/text/text-position';
import {textResourceFromFilePath} from '../../../../../util/resource/text/text-resource';
import {codeLexicalAnalyzer} from '../../../../lexical/code-lexical-analyzer';
import {$Node, Node, is} from '../../../../node';
import {ImportNode} from '../../../../syntax/node/import/import-node';
import {StatementNode} from '../../../../syntax/statement/statement-node';
import {createSyntaxAnalyzer} from '../../../../syntax/syntax-analyzer';
import {DeclarationManager} from '../../../declaration-manager';
import {semanticParse} from '../../../semantic-analyzer';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {ImportValueSemantic, importValueSemantic} from './import-value-semantic';

const LIB_FOLDER = resolve(__dirname, '../../../../../../lib');

export function syntaxImportsParse(context: SemanticAnalyzerContext, statements: Array2<StatementNode>) {
  for (const statement of statements) {
    if (is<ImportNode>(statement.value, $Node.IMPORT)) {
      importValueSemanticTryParse(context, statement.value);
    }
  }
}

export function importValueSemanticTryParse(
  context: SemanticAnalyzerContext,
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
    context.issueManager.addError(node.value.range, DIAGNOSTIC_MESSAGE.cannotFindResource(location));

    return;
  }

  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer);

  const {declarationManager} = semanticParse(syntaxAnalyzer);

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

  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer);
  const {declarationManager} = semanticParse(syntaxAnalyzer);

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
