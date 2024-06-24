import {Array2} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {AnalyzerDiagnostic, formatAnalyzerDiagnostic} from './analyzer-diagnostic';
import {AnalyzerDiagnosticMessage} from './analyzer-diagnostic-message';
import {AnalyzerDiagnosticSeverity} from './analyzer-diagnostic-severity';
import {AnalyzerDiagnosticTag} from './analyzer-diagnostic-tag';

export interface AnalyzerDiagnosticManager {
  resource: TextResource;
  diagnostics: Array2<AnalyzerDiagnostic>;

  addDiagnostic(
    level: AnalyzerDiagnosticSeverity,
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
    tags: AnalyzerDiagnosticTag[],
  ): AnalyzerDiagnostic;

  addError(
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
    tags?: AnalyzerDiagnosticTag[],
  ): AnalyzerDiagnostic;

  addWarning(
    range: TextRange,
    message: AnalyzerDiagnosticMessage,
    tags?: AnalyzerDiagnosticTag[],
  ): AnalyzerDiagnostic;
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
      tags: AnalyzerDiagnosticTag[],
    ): AnalyzerDiagnostic {
      const issue: AnalyzerDiagnostic = {
        severity,
        range,
        message,
        tags,
      };

      this.diagnostics.push(issue);
      this.log(issue);

      return issue;
    },

    addError(
      range: TextRange,
      message: AnalyzerDiagnosticMessage,
      tags: AnalyzerDiagnosticTag[] = [],
    ): AnalyzerDiagnostic {
      return this.addDiagnostic(AnalyzerDiagnosticSeverity.ERROR, range, message, tags ?? []);
    },

    addWarning(
      range: TextRange,
      message: AnalyzerDiagnosticMessage,
      tags: AnalyzerDiagnosticTag[] = [],
    ): AnalyzerDiagnostic {
      return this.addDiagnostic(AnalyzerDiagnosticSeverity.ERROR, range, message, tags);
    },

    log(issue: AnalyzerDiagnostic): void {
      const error = formatAnalyzerDiagnostic(this.resource, issue);
      console.error(error);
    },
  };

  return manager;
}
