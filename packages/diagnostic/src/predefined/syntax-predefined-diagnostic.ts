// import {Text, TextRange, newText, nothing} from '#common';
// import {AnalyzerDiagnostic, AnalyzerDiagnosticSeverity, newDiagnostic} from '#diagnostic';

// export function syntaxPredefinedDiagnostics(range: TextRange) {
//   return {
//     notImplemented: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText('Error not implemented'),
//         expect: newText('Create a valid error message'),
//       }),

//     unknownSymbol: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText('Unknown symbol'),
//         expect: nothing,
//       }),

//     unexpectedExpression: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText('Unexpected expression'),
//         expect: nothing,
//       }),

//     expectCloseToken: (open: Text): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Token '${open}' has no close pair`),
//         expect: nothing,
//       }),
//   };
// }
