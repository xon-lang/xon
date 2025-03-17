import {$ImportStatementNode, $StringNode, StringNode} from '#analyzer';
import {newCharacter, newText} from '#common';
import {is} from '#typing';
import {newTextDocumentAnalyzer, vsCodeToXonPosition} from '#vscode';
import {existsSync, readdirSync, statSync} from 'node:fs';
import {basename, dirname, resolve} from 'node:path';
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

    const iterateDir = resolve(dirname(document.uri.fsPath), contentUntilSlash);

    if (!existsSync(iterateDir)) {
      return;
    }

    const documentBaseName = basename(document.uri.fsPath);
    const items: CompletionItem[] = [];

    for (const path of readdirSync(iterateDir)) {
      const fullPath = resolve(iterateDir, path);
      const stat = statSync(fullPath);
      const baseName = basename(fullPath);

      if (baseName === documentBaseName) {
        continue;
      }

      if (stat.isFile()) {
        items.push(new CompletionItem(baseName, CompletionItemKind.File));
      }

      if (stat.isDirectory()) {
        items.push(new CompletionItem(baseName, CompletionItemKind.Folder));
      }
    }

    return items;
  }
}
