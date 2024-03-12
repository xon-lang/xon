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
import {nothing} from '../../../../../core/lib/core';
import {$Node, is} from '../../../../../core/parser/node/node';
import {MemberNode} from '../../../../../core/parser/node/syntax/member/member-node';
import {IdNode} from '../../../../../core/parser/node/token/id/id-node';
import {parseSemantic} from '../../../../../core/semantic/semantic';
import {findNodeBytPositionInSyntax, getDocumentSyntax} from '../../../util';

export class DotCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const syntax = getDocumentSyntax(document);
    const semantic = parseSemantic(syntax);
    const node = findNodeBytPositionInSyntax(syntax, position);

    if (is<MemberNode>(node?.parent, $Node.MEMBER) && is<IdNode>(node.parent.instance, $Node.ID)) {
      const declaration = semantic.declarationManager.findSingle(node.parent.instance, 0);

      if (declaration) {
        return Object.keys(declaration.attributes).map((x) => new CompletionItem(x, CompletionItemKind.Property));
      }
    }

    return nothing;
  }
}
