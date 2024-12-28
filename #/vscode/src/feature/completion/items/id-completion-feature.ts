import {$LexicalNode} from '#core';
import {is} from '#typing';
import {convertVscodePosition, getDocumentSemantic} from '#vscode';
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

export class IdCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNodeAtPosition(convertVscodePosition(document, position));

    if (is(node, $LexicalNode)) {
      const item = new CompletionItem(node.text.toString(), CompletionItemKind.Property);
    }

    return [];
  }
}
