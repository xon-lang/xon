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
import {$Semantic, SemanticNode, semanticIs} from '../../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../../core/analyzer/semantic/type/id/id-type-semantic';
import {TypeSemantic, isTypeSemantic} from '../../../../../core/analyzer/semantic/type/type-semantic';
import {ValueSemantic} from '../../../../../core/analyzer/semantic/value/value-semantic';
import {$Node, is} from '../../../../../core/analyzer/syntax/node';
import {MemberNode} from '../../../../../core/analyzer/syntax/node/member/member-node';
import {Array2, Nothing, String2, nothing} from '../../../../../lib/types';
import {findNodeByPositionInSyntax, getDocumentSyntax} from '../../../util';

export class DotCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<Array2<CompletionItem> | CompletionList<CompletionItem>> {
    const syntax = getDocumentSyntax(document, this.channel);
    const node = findNodeByPositionInSyntax(syntax, position);

    if (is<MemberNode>(node?.parent, $Node.MEMBER) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);
      if (attributes) {
        return Object.entries(attributes).map(([name, types]) => createPropertyCompletionItem(name, types));
      }
    }
    return nothing;
  }
}

function getAttributes(semantic: SemanticNode): Record<String2, Array2<TypeSemantic>> | Nothing {
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

  if (semanticIs<IdTypeSemantic>(type, $Semantic.ID_TYPE)) {
    item.detail = type.declaration.name;
  }

  return item;
}
