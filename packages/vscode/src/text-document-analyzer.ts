import {
  HighlightToken,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  newHighlightContext,
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
    highlights: ArrayData<HighlightToken>;
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

  const highlightContext = newHighlightContext();
  const diagnosticContext = newDiagnosticContext();

  for (const statement of statements) {
    statement.highlight && statement.highlight(highlightContext);
    statement.diagnose && statement.diagnose(diagnosticContext);
  }

  channel.appendLine('Handled document: ' + document.uri.fsPath);

  return {
    $: $TextDocumentAnalyzer(),
    statements,
    highlights: highlightContext.highlights,
    diagnostics: diagnosticContext.diagnostics,
  };
}
