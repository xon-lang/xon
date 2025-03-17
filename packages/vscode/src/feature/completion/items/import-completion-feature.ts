import {$ImportStatementNode, $StringNode, StringNode} from '#analyzer';
import {
  $DirectoryResource,
  $FileResource,
  newCharacter,
  newDirectoryResource,
  newText,
  newURI,
} from '#common';
import {is} from '#typing';
import {newTextDocumentAnalyzer, vsCodeToXonPosition} from '#vscode';
import {dirname, resolve} from 'node:path';
import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
} from 'vscode';

export class ImportCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const analyzer = newTextDocumentAnalyzer(document, this.channel);

    const node = analyzer.findClosestNode(
      (node): node is StringNode =>
        is(node, $StringNode()) && is(node.parent, $ImportStatementNode()) && node === node.parent.expression,
      vsCodeToXonPosition(document, position),
    );

    if (!node) {
      return;
    }

    const contentUntilPosition =
      node.content?.text.slice(0, document.offsetAt(position) - node.content.range.start.index) ?? newText();
    const lastSlashIndex = contentUntilPosition.lastItemIndex(newCharacter('/'));
    const contentUntilSlash = contentUntilPosition.slice(0, lastSlashIndex ?? 0).toNativeString();

    const documentDirectory = newDirectoryResource(
      newURI(newText(resolve(dirname(document.uri.fsPath), contentUntilSlash))),
    );

    if (!documentDirectory.exists()) {
      return;
    }

    const items: CompletionItem[] = [];

    for (const resource of documentDirectory.getResources()) {
      if (is(resource, $FileResource())) {
        items.push(new CompletionItem(resource.name.toNativeString(), CompletionItemKind.File));

        continue;
      }

      if (is(resource, $DirectoryResource())) {
        items.push(new CompletionItem(resource.name.toNativeString(), CompletionItemKind.File));

        continue;
      }
    }

    return items;
  }
}
