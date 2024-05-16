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
import {Array2, Something} from '../../../../../lib/types';
import {findNodeByPositionInSyntax, getDocumentSyntax} from '../../../util';

export class IdCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<Array2<CompletionItem> | CompletionList<CompletionItem>> {
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, position);

    const item = new CompletionItem((node as Something)['text'] ?? 'name', CompletionItemKind.Property);

    return [];
  }
}
