// import {Text, TextRange, newArrayData, newText, nothing} from '#common';
// import {
//   AnalyzerDiagnostic,
//   AnalyzerDiagnosticSeverity,
//   AnalyzerDiagnosticTag,
//   newDiagnostic,
// } from '#diagnostic';

// export function syntaxPredefinedDiagnostics(range: TextRange) {
//   return {
//     declarationNotFound: (name: Text): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Declaration '${name}' not found`),
//         expect: nothing,
//       }),

//     tooManyDeclarationsFoundWithName: (name: Text): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Too many declarations found with '${name}'`),
//         expect: nothing,
//       }),

//     shouldBeSingleItem: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Should be single item`),
//         expect: nothing,
//       }),

//     shouldBeInteger: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Should be integer`),
//         expect: nothing,
//       }),

//     shouldBeMemberName: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Should be member name`),
//         expect: nothing,
//       }),

//     wrongType: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Wrong type`),
//         expect: nothing,
//       }),

//     cannotResolveType: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Cannot resolve type`),
//         expect: nothing,
//       }),

//     noTypeRequiredForConst: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`No type required for const`),
//         expect: nothing,
//       }),

//     cannotBeUsedAsAType: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Cannot be used as a type`),
//         expect: nothing,
//       }),

//     noValueAllowed: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`No value allowed`),
//         expect: nothing,
//       }),

//     noAttributesAllowed: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`No attributes allowed`),
//         expect: nothing,
//       }),

//     cannotEvaluate: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Cannot evaluate`),
//         expect: nothing,
//       }),

//     cannotFindResource: (path: Text): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Cannot find resource '${[path]}'`),
//         expect: nothing,
//       }),

//     importValueShouldBeString: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Import value should be string`),
//         expect: nothing,
//       }),

//     shouldBeDeclarationStatement: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Should be declaration statement`),
//         expect: nothing,
//       }),

//     shouldNotBeBody: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Should not be body`),
//         expect: nothing,
//       }),

//     documentationLabelAlreadyExists: (name: Text): AnalyzerDiagnostic =>
//       newDiagnostic(
//         range,
//         AnalyzerDiagnosticSeverity.WARNING,
//         {
//           actual: newText(`Documentation label '${name}' already exists`),
//           expect: nothing,
//         },
//         nothing,
//         newArrayData([AnalyzerDiagnosticTag.UNNECESSARY]),
//       ),

//     declarationAlreadyExists: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Declaration already exists`),
//         expect: nothing,
//       }),
//   };
// }
