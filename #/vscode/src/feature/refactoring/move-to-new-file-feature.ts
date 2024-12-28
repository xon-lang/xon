import {changeTextCase, kebabCase, newText, nothing} from '#common';
import {$IdNode} from '#core';
import {is} from '#typing';
import {
  EXTENSION_CONFIG,
  FILE_EXTENSION,
  LANGUAGE_NAME,
  convertVscodePosition,
  getDocumentSemantic,
} from '#vscode';
import {dirname} from 'path';
import {
  CancellationToken,
  CodeAction,
  CodeActionContext,
  CodeActionKind,
  CodeActionProvider,
  Command,
  ExtensionContext,
  OutputChannel,
  ProviderResult,
  Range,
  Selection,
  TextDocument,
  Uri,
  WorkspaceEdit,
  languages,
} from 'vscode';

export function configureMoveToNewFileFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerCodeActionsProvider(LANGUAGE_NAME, new MoveToNewFileProvider(channel)),
  );
}

class MoveToNewFileProvider implements CodeActionProvider {
  constructor(private channel: OutputChannel) {}

  provideCodeActions(
    document: TextDocument,
    range: Range | Selection,
    context: CodeActionContext,
    token: CancellationToken,
  ): ProviderResult<(CodeAction | Command)[]> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, range.start));

    if (!is(node, $IdNode)) {
      return nothing;
    }

    const dir = dirname(document.uri.fsPath);
    const caseName = newText(EXTENSION_CONFIG.newFileNameCase.get());
    const changedCaseText =
      changeTextCase(caseName, node.text) ?? kebabCase(caseName.toString(), node.text.toString());
    const fileName = changedCaseText + '.' + FILE_EXTENSION;
    const action = new CodeAction(`Move to a new file: './${fileName}'`, CodeActionKind.RefactorMove);
    action.edit = new WorkspaceEdit();
    const path = Uri.joinPath(Uri.parse(dir), fileName);
    action.edit.createFile(path);

    return [
      action,
      new CodeAction('Move to a new file', CodeActionKind.RefactorMove),
      new CodeAction('Move to an existing file', CodeActionKind.RefactorMove),
    ];
  }

  resolveCodeAction?(codeAction: CodeAction, token: CancellationToken): ProviderResult<CodeAction> {
    throw new Error('Method not implemented.');
  }
}
