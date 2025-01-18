import {ArrayData, Integer, Nothing, Text, TextRange} from '#common';
import {AnalyzerDiagnosticSeverity, AnalyzerDiagnosticTag} from '#diagnostic';

export type AnalyzerDiagnosticMessage = {
  actual: Text;
  expect: Text | Nothing;
};

// todo rename 'AnalyzerDiagnostic' to 'Diagnostic' ???
export type AnalyzerDiagnostic = {
  range: TextRange;
  severity: AnalyzerDiagnosticSeverity;
  message: AnalyzerDiagnosticMessage;
  code?: Integer | Nothing;
  tags?: ArrayData<AnalyzerDiagnosticTag> | Nothing;

  // terminalFormat(): Text;
};

export function newDiagnostic(
  range: TextRange,
  severity: AnalyzerDiagnosticSeverity,
  message: AnalyzerDiagnosticMessage,
  code?: Integer | Nothing,
  tags?: ArrayData<AnalyzerDiagnosticTag> | Nothing,
): AnalyzerDiagnostic {
  return {
    range,
    severity,
    message,
    code,
    tags,

    // terminalFormat(): Text {
    //   return terminalFormat(newText(this.message.actual), this.reference);
    // },
  };
}

// const cyan = (x: Text): Text => colorText(x, TerminalColor.FG_CYAN);
// const gray = (x: Text): Text => colorText(x, TerminalColor.FG_GRAY);
// const red = (x: Text): Text => colorText(x, TerminalColor.FG_RED);

// todo rename 'terminalFormat'
// export function terminalFormat(message: Text, {resource, range}: TextReference): Text {
//   const msg = red(message);
//   const lineText = resource.data.lineText(range.start.line);
//   const nodeText = resource.data.slice(range.start.index, range.stop.index);
//   const location = cyan(resource.location ?? newText('<code>'));
//   const line = cyan(newText(`:${range.start.line + 1}`));
//   const column = cyan(newText(`:${range.start.column + 1}`));
//   const lineNumberBeforeGrayed = newText(`${range.start.line + 1} | `);
//   const lineNumber = gray(lineNumberBeforeGrayed);
//   const caret = newText(' ')
//     .repeat(range.start.column + lineNumberBeforeGrayed.count())
//     .addLastItems(red(newText('~').repeat(nodeText.count())));

//   // todo fix long width interpolation
//   return newText(
//     `${msg.toNativeString()}\n${location.toNativeString()}${line.toNativeString()}${column.toNativeString()}\n${lineNumber.toNativeString()}${lineText.toNativeString()}\n${caret.toNativeString()}`,
//   );
// }
