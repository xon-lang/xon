import {TextRange, newText, nothing} from '#common';
import {AnalyzerDiagnostic, AnalyzerDiagnosticSeverity, newDiagnostic} from '#diagnostic';

// export function syntaxPredefinedDiagnostics(range: TextRange) {
//   return {
//     cannotTranslate: (): AnalyzerDiagnostic =>
//       newDiagnostic(range, AnalyzerDiagnosticSeverity.ERROR, {
//         actual: newText(`Cannot translate`),
//         expect: nothing,
//       }),
//   };
// }
