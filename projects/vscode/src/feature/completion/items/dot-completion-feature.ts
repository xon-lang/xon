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
import {Nothing, String2, nothing} from '../../../../../core/lib/core';
import {$Node, is} from '../../../../../core/parser/node/node';
import {MemberNode} from '../../../../../core/parser/node/syntax/member/member-node';
import {$Semantic, Semantic, parseSemantic, semanticIs} from '../../../../../core/semantic/semantic';
import {TypeSemantic} from '../../../../../core/semantic/type/type-semantic';
import {ValueSemantic} from '../../../../../core/semantic/value/value-semantic';
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

    if (is<MemberNode>(node?.parent, $Node.MEMBER) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);

      if (attributes) {
        return Object.keys(attributes).map((x) => new CompletionItem(x, CompletionItemKind.Property));
      }
    }

    return nothing;
  }
}

function getAttributes(semantic: Semantic): Record<String2, TypeSemantic[]> | Nothing {
  if (semanticIs<TypeSemantic>(semantic, $Semantic.TYPE)) {
    return semantic.attributes();
  }

  if (semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) && semantic.type) {
    return semantic.type.attributes();
  }

  return nothing;
}
