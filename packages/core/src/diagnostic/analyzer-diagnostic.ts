import {colorText, Integer, Nothing, String2, TerminalColor, TextResourceRange} from '#common';
import {AnalyzerDiagnosticSeverity, AnalyzerDiagnosticTag} from '#core';

export type AnalyzerDiagnosticMessage = {
  actual: String2;
  expect: String2 | Nothing;
};

// todo rename 'AnalyzerDiagnostic' to 'Diagnostic'
export type AnalyzerDiagnostic = {
  reference: TextResourceRange;
  severity: AnalyzerDiagnosticSeverity;
  message: AnalyzerDiagnosticMessage;
  code?: Integer | Nothing;
  tags?: AnalyzerDiagnosticTag[] | Nothing;

  terminalFormat(): String2;
};

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
      return terminalFormat(this.message.actual, this.reference);
    },
  };
}

const cyan = (x: String2): String2 => colorText(x, TerminalColor.FG_CYAN);
const gray = (x: String2): String2 => colorText(x, TerminalColor.FG_GRAY);
const red = (x: String2): String2 => colorText(x, TerminalColor.FG_RED);

// todo rename 'terminalFormat'
export function terminalFormat(message: String2, {resource, range}: TextResourceRange): String2 {
  const msg = red(message);
  const lineText = resource.data.lineText(range.start.line).toString();
  const nodeText = resource.data.slice(range).toString();
  const location = cyan(resource.location ?? '<code>');
  const line = cyan(`:${range.start.line + 1}`);
  const column = cyan(`:${range.start.column + 1}`);
  const lineNumberBeforeGrayed = `${range.start.line + 1} | `;
  const lineNumber = gray(lineNumberBeforeGrayed);
  const caret =
    ' '.repeat(range.start.column + lineNumberBeforeGrayed.length) + red('~'.repeat(nodeText.length));

  return `${msg}\n${location}${line}${column}\n${lineNumber}${lineText}\n${caret}`;
}
