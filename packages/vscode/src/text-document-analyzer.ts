import {
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  parseStatements,
  StatementNode,
} from '#analyzer';
import {ArrayData, newText} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';
import {$VscodeType} from '#vscode';
import {OutputChannel, TextDocument} from 'vscode';

export type TextDocumentAnalyzer = Model &
  Brand<'Analyzer.TextDocumentAnalyzer'> & {
    statements: ArrayData<StatementNode>;
    diagnostics: ArrayData<AnalyzerDiagnostic>;
  };

export const $TextDocumentAnalyzer = () => $VscodeType<TextDocumentAnalyzer>('TextDocumentAnalyzer');

export function newTextDocumentAnalyzer(
  document: TextDocument,
  channel: OutputChannel,
): TextDocumentAnalyzer {
  const text = newText(document.getText());
  // const filepath = document.uri.fsPath;
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  const diagnosticContext = newDiagnosticContext();

  statements.forEach((x) => x.diagnose && x.diagnose(diagnosticContext));
  // channel.appendLine(error?.toString() ?? 'Error');

  return {
    $: $TextDocumentAnalyzer(),
    statements,
    diagnostics: diagnosticContext.diagnostics,
  };
}
