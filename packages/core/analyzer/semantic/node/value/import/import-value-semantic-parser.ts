import {dirname, join, resolve} from 'path';
import {Nothing, String2, nothing} from '../../../../../../lib/types';
import {textResourceFromLocation} from '../../../../../util/resource/text/text-resource';
import {ImportNode} from '../../../../syntax/node/import/import-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {DeclarationScope} from '../../../declaration-scope';
import {SemanticAnalyzer, createSemanticAnalyzer} from '../../../semantic-analyzer';
import {unknownTypeSemantic} from '../../type/unknown/unknown-type-semantic';
import {ImportValueSemantic, importValueSemantic} from './import-value-semantic';

const LIB_FOLDER = resolve(__dirname, '../../../../../../lib');

export function importValueSemanticParse(
  analyzer: SemanticAnalyzer,
  node: ImportNode,
): ImportValueSemantic | Nothing {
  if (!node.value) {
    return importValueSemantic(node, nothing, unknownTypeSemantic(analyzer, node));
  }

  // todo should fix 'node.value.content?.text ?? ''' ???
  const location = normalizeImportString(
    node.value.content?.text.toString() ?? '',
    analyzer.resource.location,
  );
  const resource = textResourceFromLocation(location);

  if (!resource) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.value.reference, (x) =>
      x.cannotFindResource(location),
    );

    return;
  }

  const syntaxAnalyzer = syntaxFromResource(resource);

  const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

  if (!analyzer.declarationManager.imports) {
    analyzer.declarationManager.imports = [];
  }

  analyzer.declarationManager.imports.push(declarationManager);

  // todo fix import type. should not be unknown
  return importValueSemantic(node, resource, unknownTypeSemantic(analyzer, node));
}

export function declarationManagerFromImportString(importString: String2): DeclarationScope | Nothing {
  const location = normalizeImportString(importString);
  const resource = textResourceFromLocation(location);

  if (!resource) {
    return nothing;
  }

  const syntaxAnalyzer = syntaxFromResource(resource);
  const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

  return declarationManager;
}

function normalizeImportString(location: String2, targetSourceLocation?: String2 | Nothing): String2 {
  // todo get extension '.xon' from config
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
