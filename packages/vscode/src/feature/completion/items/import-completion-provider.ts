import {$ImportStatementNode, $StringNode, StringNode} from '#analyzer';
import {
  $DirectoryResource,
  $FileResource,
  newCharacter,
  newDirectoryResource,
  newText,
  newUri,
  nothing,
  Nothing,
} from '#common';
import {is} from '#typing';
import {newTextDocumentAnalyzer, TextDocumentAnalyzer, vsCodeToXonPosition} from '#vscode';
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

export class ImportCompletionProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    console.log(context.triggerCharacter, context.triggerKind);

    const analyzer = newTextDocumentAnalyzer(document, this.channel);

    if (context.triggerCharacter) {
      return getImportPathCompletions(analyzer, document, position);
    }

    return getImportDeclarationCompletions(analyzer, document, position);
  }
}

function getImportPathCompletions(
  analyzer: TextDocumentAnalyzer,
  document: TextDocument,
  position: Position,
): CompletionItem[] | Nothing {
  const node = analyzer.findClosestNode(
    (node): node is StringNode =>
      is(node, $StringNode()) && is(node.parent, $ImportStatementNode()) && node === node.parent.expression,
    vsCodeToXonPosition(document, position),
  );

  if (!node) {
    return nothing;
  }

  const contentUntilPosition =
    node.content?.text.slice(0, document.offsetAt(position) - node.content.range.start.index) ?? newText();
  const lastSlashIndex = contentUntilPosition.lastItemIndex(newCharacter('/'));
  const contentUntilSlash = contentUntilPosition.slice(0, lastSlashIndex ?? 0).toNativeString();

  const documentDirectory = newDirectoryResource(
    newUri(newText(resolve(dirname(document.uri.fsPath), contentUntilSlash))),
  );

  if (!documentDirectory.exists()) {
    return;
  }

  const items: CompletionItem[] = [];

  for (const resource of documentDirectory.getResources()) {
    if (is(resource, $FileResource())) {
      items.push(new CompletionItem(resource.basename.toNativeString(), CompletionItemKind.File));

      continue;
    }

    if (is(resource, $DirectoryResource())) {
      items.push(new CompletionItem(resource.name.toNativeString(), CompletionItemKind.Folder));

      continue;
    }
  }

  return items;
}

function getImportDeclarationCompletions(
  analyzer: TextDocumentAnalyzer,
  document: TextDocument,
  position: Position,
): CompletionItem[] | Nothing {
  const importNode = analyzer.findClosestNode(
    (node) => is(node, $ImportStatementNode()),
    vsCodeToXonPosition(document, position),
  );

  if (!importNode?.body?.range.contains(vsCodeToXonPosition(document, position))) {
    return nothing;
  }

  return importNode?.semantic?.scope
    ?.keys()
    .map((key) => new CompletionItem(key.toNativeString(), CompletionItemKind.Field))
    .toNativeArray();
}
