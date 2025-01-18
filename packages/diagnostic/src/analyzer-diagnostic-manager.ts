import {ArrayData, Integer, Nothing, TextRange, TextReference, TextResource, newArrayData} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticMessage,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticTag,
  newDiagnostic,
  predefinedDiagnostics,
} from '#diagnostic';

export type AnalyzerDiagnosticManager = {
  resource: TextResource;
  diagnostics: ArrayData<AnalyzerDiagnostic>;

  addDiagnostic(
    level: AnalyzerDiagnosticSeverity,
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
    code?: Integer | Nothing,
    tags?: ArrayData<AnalyzerDiagnosticTag> | Nothing,
  ): AnalyzerDiagnostic;

  addPredefinedDiagnostic(
    reference: TextReference,
    select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
  ): AnalyzerDiagnostic;

  // log(diagnostic: AnalyzerDiagnostic): void;
};

export function createDiagnosticManager(
  resource: TextResource,
  diagnostics = newArrayData<AnalyzerDiagnostic>(),
): AnalyzerDiagnosticManager {
  const manager: AnalyzerDiagnosticManager = {
    resource,
    diagnostics,

    addDiagnostic(
      severity: AnalyzerDiagnosticSeverity,
      range: TextRange,
      message: AnalyzerDiagnosticMessage,
      code?: Integer | Nothing,
      tags?: ArrayData<AnalyzerDiagnosticTag> | Nothing,
    ): AnalyzerDiagnostic {
      const reference = resource.reference(range);
      const diagnostic = newDiagnostic(reference, severity, message, code, tags);
      this.diagnostics.addLastItem(diagnostic);

      // this.log(diagnostic);

      return diagnostic;
    },

    addPredefinedDiagnostic(
      reference: TextReference,
      select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
    ): AnalyzerDiagnostic {
      const diagnostic = select(predefinedDiagnostics(reference));
      this.diagnostics.addLastItem(diagnostic);

      // this.log(diagnostic);

      return diagnostic;
    },

    // log(diagnostic: AnalyzerDiagnostic): void {
    //   console.error(diagnostic.terminalFormat());
    // },
  };

  return manager;
}
