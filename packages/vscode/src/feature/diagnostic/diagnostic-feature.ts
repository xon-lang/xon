import {ArrayData, newArrayData} from '#common';
import {AnalyzerDiagnostic, AnalyzerDiagnosticSeverity, AnalyzerDiagnosticTag} from '#diagnostic';
import {LANGUAGE_NAME, newTextDocumentAnalyzer, xonToVsCodeRange} from '#vscode';
import {
  Diagnostic,
  DiagnosticCollection,
  DiagnosticSeverity,
  DiagnosticTag,
  ExtensionContext,
  languages,
  OutputChannel,
  TextDocument,
  window,
  workspace,
} from 'vscode';

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

  const analyzer = newTextDocumentAnalyzer(document, channel);

  diagnostics.clear();
  diagnostics.set(document.uri, convertDiagnostic(analyzer.diagnostics).toNativeArray());
}

function convertDiagnostic(analyzerDiagnostics: ArrayData<AnalyzerDiagnostic>): ArrayData<Diagnostic> {
  const diagnostics = newArrayData<Diagnostic>();

  for (const analyzerDiagnostic of analyzerDiagnostics) {
    const range = xonToVsCodeRange(analyzerDiagnostic.range);

    const diagnostic = new Diagnostic(
      range,
      analyzerDiagnostic.message.toNativeString(),
      convertDiagnosticLevel(analyzerDiagnostic.severity),
    );

    if (analyzerDiagnostic.code) {
      diagnostic.code = analyzerDiagnostic.code;
    }

    if (analyzerDiagnostic.tags) {
      diagnostic.tags = analyzerDiagnostic.tags.map(convertDiagnosticTag).toNativeArray();
    }

    diagnostics.addLastItem(diagnostic);
  }

  return diagnostics;
}

function convertDiagnosticLevel(severity: AnalyzerDiagnosticSeverity): DiagnosticSeverity {
  switch (severity) {
    case AnalyzerDiagnosticSeverity.Error:
      return DiagnosticSeverity.Error;

    case AnalyzerDiagnosticSeverity.Warning:
      return DiagnosticSeverity.Warning;

    case AnalyzerDiagnosticSeverity.Information:
      return DiagnosticSeverity.Information;

    case AnalyzerDiagnosticSeverity.Hint:
      return DiagnosticSeverity.Hint;
  }
}

function convertDiagnosticTag(tag: AnalyzerDiagnosticTag): DiagnosticTag {
  switch (tag) {
    case AnalyzerDiagnosticTag.Unnecessary:
      return DiagnosticTag.Unnecessary;

    case AnalyzerDiagnosticTag.Deprecated:
      return DiagnosticTag.Deprecated;
  }
}
