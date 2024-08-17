import {Array2, Integer, Nothing} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourceRange} from '../util/resource/text/text-resource-range';
import {AnalyzerDiagnostic, AnalyzerDiagnosticMessage, createDiagnostic} from './analyzer-diagnostic';
import {predefinedDiagnostics} from './analyzer-diagnostic-message';
import {AnalyzerDiagnosticSeverity} from './analyzer-diagnostic-severity';
import {AnalyzerDiagnosticTag} from './analyzer-diagnostic-tag';

export interface AnalyzerDiagnosticManager {
  resource: TextResource;
  diagnostics: Array2<AnalyzerDiagnostic>;

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
  diagnostics: Array2<AnalyzerDiagnostic> = [],
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
