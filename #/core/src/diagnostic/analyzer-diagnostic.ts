import {
  colorText,
  Integer,
  newTextData,
  Nothing,
  String2,
  TerminalColor,
  TextData,
  TextReference,
} from '#/common';
import {AnalyzerDiagnosticSeverity, AnalyzerDiagnosticTag} from '#/core';

export type AnalyzerDiagnosticMessage = {
  actual: String2;
  expect: String2 | Nothing;
};

// todo rename 'AnalyzerDiagnostic' to 'Diagnostic'
export type AnalyzerDiagnostic = {
  reference: TextReference;
  severity: AnalyzerDiagnosticSeverity;
  message: AnalyzerDiagnosticMessage;
  code?: Integer | Nothing;
  tags?: AnalyzerDiagnosticTag[] | Nothing;

  terminalFormat(): String2;
};

export function createDiagnostic(
  reference: TextReference,
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
      return terminalFormat(newTextData(this.message.actual), this.reference);
    },
  };
}

const cyan = (x: TextData): TextData => colorText(x, TerminalColor.FG_CYAN);
const gray = (x: TextData): TextData => colorText(x, TerminalColor.FG_GRAY);
const red = (x: TextData): TextData => colorText(x, TerminalColor.FG_RED);

// todo rename 'terminalFormat'
export function terminalFormat(message: TextData, {resource, range}: TextReference): String2 {
  const msg = red(message);
  const lineText = resource.data.lineText(range.start.line).toString();
  const nodeText = resource.data.slice(range).toString();
  const location = cyan(resource.location ?? newTextData('<code>'));
  const line = cyan(newTextData(`:${range.start.line + 1}`));
  const column = cyan(newTextData(`:${range.start.column + 1}`));
  const lineNumberBeforeGrayed = newTextData(`${range.start.line + 1} | `);
  const lineNumber = gray(lineNumberBeforeGrayed);
  const caret = newTextData(' ')
    .repeat(range.start.column + lineNumberBeforeGrayed.length())
    .addLast(...red(newTextData('~').repeat(nodeText.length)));

  return `${msg}\n${location}${line}${column}\n${lineNumber}${lineText}\n${caret}`;
}
