import {
  newArrayData,
  newTextData,
  Nothing,
  nothing,
  String2,
  TextData,
  textResourceFromLocation,
} from '#common';
import {
  createSemanticAnalyzer,
  DeclarationScope,
  ImportNode,
  ImportValueSemantic,
  importValueSemantic,
  SemanticAnalyzer,
  syntaxFromResource,
  unknownTypeSemantic,
} from '#core';
import {libDir} from '#xon-lib';
import {dirname, join} from 'node:path';

const LIB_FOLDER = libDir();

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
      x.cannotFindResource(location.toString()),
    );

    return;
  }

  const syntaxAnalyzer = syntaxFromResource(resource);

  const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

  if (!analyzer.declarationManager.imports) {
    analyzer.declarationManager.imports = newArrayData();
  }

  analyzer.declarationManager.imports.addLast(declarationManager);

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

function normalizeImportString(location: String2, targetSourceLocation?: TextData | Nothing): TextData {
  // todo get extension '.xon' from config
  const locationWithExtension = location + '.xon';

  if (location.startsWith('/') || location.startsWith('.')) {
    if (targetSourceLocation) {
      return newTextData(join(dirname(targetSourceLocation.toString()), locationWithExtension));
    }

    return newTextData(locationWithExtension);
  }

  // todo handle additional extension or other formats (json, other data files...)
  return newTextData(join(LIB_FOLDER, locationWithExtension));
}
