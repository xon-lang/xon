// import {
//   createSemanticAnalyzer,
//   DeclarationScope,
//   ImportNode,
//   ImportValueSemantic,
//   importValueSemantic,
//   newUnknownTypeSemantic,
//   SemanticAnalyzer,
//   syntaxFromResource,
// } from '#analyzer';
// import {newArrayData, newText, Nothing, nothing, Text, textResourceFromLocation} from '#common';
// import {libDir} from '#xon-lib';
// import {dirname, join} from 'node:path';

// const LIB_FOLDER = libDir();

// export function importValueSemanticParse(
//   analyzer: SemanticAnalyzer,
//   node: ImportNode,
// ): ImportValueSemantic | Nothing {
//   if (!node.value) {
//     return importValueSemantic(node, nothing, newUnknownTypeSemantic(analyzer, node));
//   }

//   // todo should fix 'node.value.content?.text ?? ''' ???
//   const location = normalizeImportString(node.value.content?.text ?? newText(), analyzer.resource.location);
//   const resource = textResourceFromLocation(location);

//   if (!resource) {
//     analyzer.diagnosticManager.addPredefinedDiagnostic(node.value.reference, (x) =>
//       x.cannotFindResource(location),
//     );

//     return;
//   }

//   const syntaxAnalyzer = syntaxFromResource(resource);

//   const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

//   if (!analyzer.declarationManager.imports) {
//     analyzer.declarationManager.imports = newArrayData();
//   }

//   analyzer.declarationManager.imports.addLastItem(declarationManager);

//   // todo fix import type. should not be unknown
//   return importValueSemantic(node, resource, newUnknownTypeSemantic(analyzer, node));
// }

// export function declarationManagerFromImportString(importString: Text): DeclarationScope | Nothing {
//   const location = normalizeImportString(importString);
//   const resource = textResourceFromLocation(location);

//   if (!resource) {
//     return nothing;
//   }

//   const syntaxAnalyzer = syntaxFromResource(resource);
//   const {declarationManager} = createSemanticAnalyzer(syntaxAnalyzer);

//   return declarationManager;
// }

// function normalizeImportString(location: Text, targetSourceLocation?: Text | Nothing): Text {
//   // todo get extension '.xon' from config
//   const locationWithExtension = location + '.xon';

//   if (location.startsWith(newText('/')) || location.startsWith(newText('.'))) {
//     if (targetSourceLocation) {
//       return newText(join(dirname(targetSourceLocation.toNativeString()), locationWithExtension));
//     }

//     return newText(locationWithExtension);
//   }

//   // todo handle additional extension or other formats (json, other data files...)
//   return newText(join(LIB_FOLDER, locationWithExtension));
// }
