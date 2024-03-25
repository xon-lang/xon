import {
  CancellationToken,
  CodeAction,
  CodeActionContext,
  CodeActionKind,
  CodeActionProvider,
  Command,
  ExtensionContext,
  languages,
  OutputChannel,
  ProviderResult,
  Range,
  Selection,
  TextDocument,
} from 'vscode';

import {LANGUAGE_NAME} from '../../config';

export function configureMoveToNewFileFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerCodeActionsProvider(LANGUAGE_NAME, new MoveToNewFileProvider(channel)));
}

class MoveToNewFileProvider implements CodeActionProvider {
  constructor(private channel: OutputChannel) {}

  provideCodeActions(
    document: TextDocument,
    range: Range | Selection,
    context: CodeActionContext,
    token: CancellationToken,
  ): ProviderResult<(CodeAction | Command)[]> {
    // const action =
    return [
      new CodeAction('Move to a new file', CodeActionKind.RefactorMove),
      new CodeAction('Move to an existing file', CodeActionKind.RefactorMove),
    ];
  }

  resolveCodeAction?(codeAction: CodeAction, token: CancellationToken): ProviderResult<CodeAction> {
    throw new Error('Method not implemented.');
  }
}
