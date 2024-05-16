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
import {Issue} from '../../../../core/issue/issue';
import {IssueSeverity} from '../../../../core/issue/issue-level';
import {Array2} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, getDocumentSyntax} from '../../util';

export function configureDiagnosticsFeature(context: ExtensionContext, channel: OutputChannel) {
  const diagnostics = languages.createDiagnosticCollection(LANGUAGE_NAME);
  context.subscriptions.push(diagnostics);

  workspace.textDocuments.forEach((x) => checkDocument(x, diagnostics, channel));

  const onDidChangeActiveTextEditor = window.onDidChangeActiveTextEditor(
    (x) => x && checkDocument(x.document, diagnostics, channel),
  );

  const onDidOpenTextDocument = workspace.onDidOpenTextDocument((x) => checkDocument(x, diagnostics, channel));
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
  diagnostics.set(document.uri, getDiagnostics(syntax.issueManager.issues));
}

function getDiagnostics(issues: Array2<Issue>): Array2<Diagnostic> {
  const diagnostics: Array2<Diagnostic> = [];

  for (const issue of issues) {
    const range = convertRange(issue.range);
    const diagnostic = new Diagnostic(range, issue.message.actual, convertIssueLevel(issue.level));

    diagnostic.code = 123;
    diagnostics.push(diagnostic);
  }

  return diagnostics;
}

function convertIssueLevel(level: IssueSeverity): DiagnosticSeverity {
  switch (level) {
    case IssueSeverity.ERROR:
      return DiagnosticSeverity.Error;
    case IssueSeverity.WARNING:
      return DiagnosticSeverity.Warning;
    case IssueSeverity.INFORMATION:
      return DiagnosticSeverity.Information;
    case IssueSeverity.HINT:
      return DiagnosticSeverity.Hint;
  }
}
