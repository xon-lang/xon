import {dirname, join, resolve} from 'path';
import {Nothing, String2, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {zeroPosition} from '../../../../../util/resource/text/text-position';
import {textResourceFromFilePath} from '../../../../../util/resource/text/text-resource';
import {codeLexicalAnalyzer} from '../../../../lexical/code-lexical-analyzer';
import {$Node, Node, is} from '../../../../node';
import {ImportNode} from '../../../../syntax/node/import/import-node';
import {createSyntaxAnalyzer} from '../../../../syntax/syntax-analyzer';
import {DeclarationManager} from '../../../declaration-manager';
import {SemanticAnalyzer, createSemanticAnalyzer} from '../../../semantic-analyzer';
import {ImportValueSemantic, importValueSemantic} from './import-value-semantic';

const LIB_FOLDER = resolve(__dirname, '../../../../../../lib');

export function syntaxImportsParse(analyzer: SemanticAnalyzer) {
  for (const statement of analyzer.statements) {
    if (is<ImportNode>(statement.value, $Node.IMPORT)) {
      importValueSemanticTryParse(analyzer, statement.value);
    }
  }
}

export function importValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ImportValueSemantic | Nothing {
  if (!is<ImportNode>(node, $Node.IMPORT)) {
    return nothing;
  }

  if (!node.value) {
    return importValueSemantic(analyzer.createReference(node), nothing);
  }

  const location = normalizeImportString(node.value.value, analyzer.resource.location);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    analyzer.diagnosticManager.addError(node.value.range, DIAGNOSTIC_MESSAGE.cannotFindResource(location));

    return;
  }

  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer);

  const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

  if (!analyzer.declarationManager.imports) {
    analyzer.declarationManager.imports = [];
  }

  analyzer.declarationManager.imports.push(declarationManager);

  return importValueSemantic(analyzer.createReference(node));
}

export function declarationManagerFromImportString(importString: String2): DeclarationManager | Nothing {
  const location = normalizeImportString(importString);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    return nothing;
  }

  const lexicalAnalyzer = codeLexicalAnalyzer(resource, zeroPosition());
  const syntaxAnalyzer = createSyntaxAnalyzer(lexicalAnalyzer);
  const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

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
