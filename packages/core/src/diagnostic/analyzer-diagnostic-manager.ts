import {Integer, Nothing} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticMessage,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticTag,
  TextRange,
  TextResource,
  TextResourceRange,
  createDiagnostic,
  predefinedDiagnostics,
} from '#core';

export interface AnalyzerDiagnosticManager {
  resource: TextResource;
  diagnostics: AnalyzerDiagnostic[];

  addDiagnostic(
    level: AnalyzerDiagnosticSeverity,
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
    code?: Integer | Nothing,
    tags?: AnalyzerDiagnosticTag[] | Nothing,
  ): AnalyzerDiagnostic;

  addPredefinedDiagnostic(
    reference: TextResourceRange,
    select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
  ): AnalyzerDiagnostic;

  log(diagnostic: AnalyzerDiagnostic): void;
}

export function createDiagnosticManager(
  resource: TextResource,
  diagnostics: AnalyzerDiagnostic[] = [],
): AnalyzerDiagnosticManager {
  const manager: AnalyzerDiagnosticManager = {
    resource,
    diagnostics,

    addDiagnostic(
      severity: AnalyzerDiagnosticSeverity,
      range: TextRange,
      message: AnalyzerDiagnosticMessage,
      code?: Integer | Nothing,
      tags?: AnalyzerDiagnosticTag[] | Nothing,
    ): AnalyzerDiagnostic {
      const reference = resource.reference(range);
      const diagnostic = createDiagnostic(reference, severity, message, code, tags);
      this.diagnostics.push(diagnostic);

      // this.log(diagnostic);

      return diagnostic;
    },

    addPredefinedDiagnostic(
      reference: TextResourceRange,
      select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
    ): AnalyzerDiagnostic {
      const diagnostic = select(predefinedDiagnostics(reference));
      this.diagnostics.push(diagnostic);

      // this.log(diagnostic);

      return diagnostic;
    },

    log(diagnostic: AnalyzerDiagnostic): void {
      console.error(diagnostic.terminalFormat());
    },
  };

  return manager;
}
