import {Integer, Nothing, String2} from '../../lib/types';
import {TextResourceRange} from '../util/resource/text/text-resource-range';
import {colorText, TerminalColor} from '../util/terminal/terminal-color';
import {AnalyzerDiagnosticSeverity} from './analyzer-diagnostic-severity';
import {AnalyzerDiagnosticTag} from './analyzer-diagnostic-tag';

export interface AnalyzerDiagnosticMessage {
  actual: String2;
  expect: String2 | Nothing;
}

// todo rename 'AnalyzerDiagnostic' to 'Diagnostic'
export interface AnalyzerDiagnostic {
  reference: TextResourceRange;
  severity: AnalyzerDiagnosticSeverity;
  message: AnalyzerDiagnosticMessage;
  code?: Integer | Nothing;
  tags?: AnalyzerDiagnosticTag[] | Nothing;

  terminalFormat(): String2;
}

export function createDiagnostic(
  reference: TextResourceRange,
  severity: AnalyzerDiagnosticSeverity,
  message: AnalyzerDiagnosticMessage,
  code?: Integer | Nothing,
  tags?: AnalyzerDiagnosticTag[] | Nothing,
): AnalyzerDiagnostic {
  return {
    reference,
    severity,
    message,
    code,
    tags,

    terminalFormat(): String2 {
      const msg = red(message.actual);
      const lineText = this.reference.resource.data.lineText(this.reference.range.start.line).toString();
      const nodeText = this.reference.resource.data.slice(this.reference.range).toString();
      const location = cyan(this.reference.resource.location ?? '<code>');
      const line = cyan(`:${this.reference.range.start.line + 1}`);
      const column = cyan(`:${this.reference.range.start.column + 1}`);
      const lineNumberBeforeGrayed = `${this.reference.range.start.line + 1} | `;
      const lineNumber = gray(lineNumberBeforeGrayed);
      const caret =
        ' '.repeat(this.reference.range.start.column + lineNumberBeforeGrayed.length) +
        red('~'.repeat(nodeText.length));

      return `${msg}\n${location}${line}${column}\n${lineNumber}${lineText}\n${caret}`;
    },
  };
}

const cyan = (x: String2): String2 => colorText(x, TerminalColor.FG_CYAN);
const gray = (x: String2): String2 => colorText(x, TerminalColor.FG_GRAY);
const red = (x: String2): String2 => colorText(x, TerminalColor.FG_RED);
