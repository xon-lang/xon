import {
  Diagnostic,
  DiagnosticCollection,
  DiagnosticSeverity,
  ExtensionContext,
  languages,
  OutputChannel,
  TextDocument,
  window,
  workspace,
} from 'vscode';
import {AnalyzerDiagnostic} from '../../../../core/diagnostic/analyzer-diagnostic';
import {AnalyzerDiagnosticSeverity} from '../../../../core/diagnostic/analyzer-diagnostic-severity';
import {LANGUAGE_NAME} from '../../../../core/xon-language';
import {Array2} from '../../../../lib/types';
import {convertRange, getDocumentSyntax} from '../../util';

export function configureDiagnosticFeature(context: ExtensionContext, channel: OutputChannel) {
  const diagnostics = languages.createDiagnosticCollection(LANGUAGE_NAME);
  context.subscriptions.push(diagnostics);

  workspace.textDocuments.forEach((x) => checkDocument(x, diagnostics, channel));

  const onDidChangeActiveTextEditor = window.onDidChangeActiveTextEditor(
    (x) => x && checkDocument(x.document, diagnostics, channel),
  );

  const onDidOpenTextDocument = workspace.onDidOpenTextDocument((x) =>
    checkDocument(x, diagnostics, channel),
  );
  const onDidChangeTextDocument = workspace.onDidChangeTextDocument((x) =>
    checkDocument(x.document, diagnostics, channel),
  );
  const onDidCloseTextDocument = workspace.onDidCloseTextDocument((x) => diagnostics.delete(x.uri));

  context.subscriptions.push(onDidChangeActiveTextEditor);
  context.subscriptions.push(onDidOpenTextDocument);
  context.subscriptions.push(onDidChangeTextDocument);
  context.subscriptions.push(onDidCloseTextDocument);
}

function checkDocument(document: TextDocument, diagnostics: DiagnosticCollection, channel: OutputChannel) {
  if (document.languageId !== LANGUAGE_NAME) {
    return;
  }

  const syntax = getDocumentSyntax(document, channel);

  diagnostics.clear();
  diagnostics.set(document.uri, convertDiagnostic(syntax.diagnosticManager.diagnostics));
}

function convertDiagnostic(analyzerDiagnostics: Array2<AnalyzerDiagnostic>): Array2<Diagnostic> {
  const diagnostics: Array2<Diagnostic> = [];

  for (const analyzerDiagnostic of analyzerDiagnostics) {
    const range = convertRange(analyzerDiagnostic.range);

    const diagnostic = new Diagnostic(
      range,
      analyzerDiagnostic.message.actual,
      convertDiagnosticLevel(analyzerDiagnostic.severity),
    );

    diagnostic.code = 123;
    diagnostics.push(diagnostic);
  }

  return diagnostics;
}

function convertDiagnosticLevel(severity: AnalyzerDiagnosticSeverity): DiagnosticSeverity {
  switch (severity) {
    case AnalyzerDiagnosticSeverity.ERROR:
      return DiagnosticSeverity.Error;
    case AnalyzerDiagnosticSeverity.WARNING:
      return DiagnosticSeverity.Warning;
    case AnalyzerDiagnosticSeverity.INFORMATION:
      return DiagnosticSeverity.Information;
    case AnalyzerDiagnosticSeverity.HINT:
      return DiagnosticSeverity.Hint;
  }
}
