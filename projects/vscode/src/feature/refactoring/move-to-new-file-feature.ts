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
  Uri,
  WorkspaceEdit,
} from 'vscode';

import {dirname} from 'path';
import {nothing} from '../../../../core/lib/core';
import {$Node, is} from '../../../../core/parser/node/node';
import {IdNode} from '../../../../core/parser/node/token/id/id-node';
import {kebabCase} from '../../../../core/util/change-case';
import {LANGUAGE_EXTENSION, LANGUAGE_NAME} from '../../config';
import {findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

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
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, range.start);

    if (!is<IdNode>(node, $Node.ID)) {
      return nothing;
    }

    const action = new CodeAction('Move to a new file', CodeActionKind.RefactorMove);
    action.edit = new WorkspaceEdit();
    const dir = dirname(document.uri.fsPath);
    const fileName = kebabCase(node.text);
    const path = Uri.joinPath(Uri.parse(dir), fileName + '.' + LANGUAGE_EXTENSION);
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
