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
import {LexicalNode} from '../../../../../core/analyzer/lexical/node/lexical-node';
import {$Node, is} from '../../../../../core/analyzer/syntax/node';
import {Array2} from '../../../../../lib/types';
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

    if (is<LexicalNode>(node, $Node.TOKEN)) {
      const item = new CompletionItem(node.text, CompletionItemKind.Property);
    }

    return [];
  }
}
