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
import {Array2, Nothing, String2, nothing} from '../../../../../core/lib/core';
import {$Node, is} from '../../../../../core/parser/node/node';
import {MemberNode} from '../../../../../core/parser/node/syntax/member/member-node';
import {$Semantic, Semantic, semanticIs} from '../../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../../core/semantic/type/declaration/declaration-type-semantic';
import {TypeSemantic, isTypeSemantic} from '../../../../../core/semantic/type/type-semantic';
import {ValueSemantic} from '../../../../../core/semantic/value/value-semantic';
import {findNodeBytPositionInSyntax, getDocumentSyntax} from '../../../util';

export class DotCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<Array2<CompletionItem> | CompletionList<CompletionItem>> {
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeBytPositionInSyntax(syntax, position);

    if (is<MemberNode>(node?.parent, $Node.MEMBER) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);

      if (attributes) {
        return Object.entries(attributes).map(([name, types]) => createPropertyCompletionItem(name, types));
      }
    }

    return nothing;
  }
}

function getAttributes(semantic: Semantic): Record<String2, Array2<TypeSemantic>> | Nothing {
  if (isTypeSemantic(semantic)) {
    return semantic.attributes();
  }

  if (semanticIs<ValueSemantic>(semantic, $Semantic.VALUE) && semantic.type) {
    return semantic.type.attributes();
  }

  return nothing;
}

function createPropertyCompletionItem(name: String2, types: Array2<TypeSemantic>) {
  const item = new CompletionItem(name, CompletionItemKind.Property);
  const type = types.first();

  if (semanticIs<DeclarationTypeSemantic>(type, $Semantic.DECLARATION_TYPE)) {
    item.detail = type.declaration.name;
  }

  return item;
}
