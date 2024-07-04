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
import {$, is} from '../../../../../core/$';
import {Semantic} from '../../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {TypeSemantic, isTypeSemantic} from '../../../../../core/analyzer/semantic/node/type/type-semantic';
import {ValueSemantic} from '../../../../../core/analyzer/semantic/node/value/value-semantic';
import {MemberNode} from '../../../../../core/analyzer/syntax/node/member/member-node';
import {Array2, Nothing, String2, nothing} from '../../../../../lib/types';
import {convertVscodePosition, getDocumentSemantic} from '../../../util';

export class DotCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<Array2<CompletionItem> | CompletionList<CompletionItem>> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (is<MemberNode>(node?.parent, $.MemberNode) && node.parent.instance.semantic) {
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

  if (is<ValueSemantic>(semantic, $.ValueSemantic) && semantic.type) {
    return semantic.type.attributes();
  }

  return nothing;
}

function createPropertyCompletionItem(name: String2, types: Array2<TypeSemantic>) {
  const item = new CompletionItem(name, CompletionItemKind.Property);
  const type = types.first();

  if (is<IdTypeSemantic>(type, $.IdTypeSemantic)) {
    item.detail = type.declaration.name;
  }

  return item;
}
