import {Array2} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {AnalyzerDiagnostic, formatAnalyzerDiagnostic} from './analyzer-diagnostic';
import {AnalyzerDiagnosticMessage} from './analyzer-diagnostic-message';
import {AnalyzerDiagnosticSeverity} from './analyzer-diagnostic-severity';

export interface AnalyzerDiagnosticManager {
  resource: TextResource;
  diagnostics: Array2<AnalyzerDiagnostic>;

  addDiagnostic(
    level: AnalyzerDiagnosticSeverity,
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
  ): AnalyzerDiagnostic;

  addError(range: TextRange, message: AnalyzerDiagnosticMessage): AnalyzerDiagnostic;

  addWarning(range: TextRange, message: AnalyzerDiagnosticMessage): AnalyzerDiagnostic;
  log(issue: AnalyzerDiagnostic): void;
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
    ): AnalyzerDiagnostic {
      const issue: AnalyzerDiagnostic = {
        severity,
        range,
        message,
        code: message.code,
        tags: message.tags,
      };

      this.diagnostics.push(issue);
      this.log(issue);

      return issue;
    },

    addError(range: TextRange, message: AnalyzerDiagnosticMessage): AnalyzerDiagnostic {
      return this.addDiagnostic(AnalyzerDiagnosticSeverity.ERROR, range, message);
    },

    addWarning(range: TextRange, message: AnalyzerDiagnosticMessage): AnalyzerDiagnostic {
      return this.addDiagnostic(AnalyzerDiagnosticSeverity.WARNING, range, message);
    },

    log(issue: AnalyzerDiagnostic): void {
      const error = formatAnalyzerDiagnostic(this.resource, issue);
      console.error(error);
    },
  };

  return manager;
}
