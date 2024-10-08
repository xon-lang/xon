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
import {$, is} from '../../../../core/$';
import {getCaseFnByName, kebabCase} from '../../../../core/util/change-case';
import {nothing} from '../../../../lib/types';
import {EXTENSION_CONFIG, FILE_EXTENSION, LANGUAGE_NAME} from '../../config';
import {convertVscodePosition} from '../../util/convert';
import {getDocumentSemantic} from '../../util/util';

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

    if (!is(node, $.IdNode)) {
      return nothing;
    }

    const dir = dirname(document.uri.fsPath);
    const caseFn = getCaseFnByName(EXTENSION_CONFIG.newFileNameCase.get()) ?? kebabCase;
    const fileName = caseFn(node.text.toString()) + '.' + FILE_EXTENSION;
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
