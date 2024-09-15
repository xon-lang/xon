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
import {AnalyzerDiagnostic} from '@xon/core/src/diagnostic/analyzer-diagnostic';
import {AnalyzerDiagnosticSeverity} from '@xon/core/src/diagnostic/analyzer-diagnostic-severity';
import {AnalyzerDiagnosticTag} from '@xon/core/src/diagnostic/analyzer-diagnostic-tag';
import {LANGUAGE_NAME} from '../../config';
import {convertRange} from '../../util/convert';
import {getDocumentSemantic} from '../../util/util';

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

  const syntax = getDocumentSemantic(document, channel);

  diagnostics.clear();
  diagnostics.set(document.uri, convertDiagnostic(syntax.diagnosticManager.diagnostics));
}

function convertDiagnostic(analyzerDiagnostics: AnalyzerDiagnostic[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  for (const analyzerDiagnostic of analyzerDiagnostics) {
    const range = convertRange(analyzerDiagnostic.reference.range);

    const diagnostic = new Diagnostic(
      range,
      analyzerDiagnostic.message.actual,
      convertDiagnosticLevel(analyzerDiagnostic.severity),
    );

    if (analyzerDiagnostic.code) {
      diagnostic.code = analyzerDiagnostic.code;
    }

    if (analyzerDiagnostic.tags) {
      diagnostic.tags = analyzerDiagnostic.tags.map(convertDiagnosticTag);
    }

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

function convertDiagnosticTag(tag: AnalyzerDiagnosticTag): DiagnosticTag {
  switch (tag) {
    case AnalyzerDiagnosticTag.UNNECESSARY:
      return DiagnosticTag.Unnecessary;
    case AnalyzerDiagnosticTag.DEPRECATED:
      return DiagnosticTag.Deprecated;
  }
}
