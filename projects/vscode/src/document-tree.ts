import {Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ExtensionContext, OutputChannel, TextDocument, window, workspace} from 'vscode';
import {DocumentTree, documentToDocumentTree} from './util';
// import { documentToDocumentTree, DocumentTree } from './util';

export const changeDocumentTree$ = new Subject<DocumentTree>();

export function watchDocumentTree(context: ExtensionContext, channel: OutputChannel) {
  const changeTextDocument$ = new Subject<TextDocument>();

  changeTextDocument$
    .pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((x) => documentToDocumentTree(x)),
      catchError((error: Error, caught) => {
        const timestamp = new Date().toLocaleTimeString() + ': ';
        const message = error.stack?.toString().replace(/\n/gm, '\n' + ' '.repeat(timestamp.length));
        channel.replace(`${timestamp}${message}`);
        return caught;
      }),
    )
    .subscribe((x) => x && changeDocumentTree$.next(x));

  if (window.activeTextEditor) {
    changeTextDocument$.next(window.activeTextEditor.document);
  }

  context.subscriptions.push(window.onDidChangeActiveTextEditor((x) => x && changeTextDocument$.next(x.document)));

  context.subscriptions.push(workspace.onDidChangeTextDocument((x) => changeTextDocument$.next(x.document)));

  context.subscriptions.push(
    workspace.onDidCloseTextDocument((x) => {
      changeTextDocument$.unsubscribe();
    }),
  );
}
