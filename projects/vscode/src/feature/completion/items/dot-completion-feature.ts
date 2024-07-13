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
import {Semantic} from '../../../../../core/analyzer/semantic/node/semantic';
import {TypeSemantic} from '../../../../../core/analyzer/semantic/node/type/type-semantic';
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

    if (is(node?.parent, $.MemberNode) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);
      if (attributes) {
        return Object.entries(attributes).map(([name, types]) => createPropertyCompletionItem(name, types));
      }
    }
    return nothing;
  }
}

function getAttributes(semantic: Semantic): Record<String2, Array2<TypeSemantic>> | Nothing {
  if (is(semantic, $.TypeSemantic)) {
    return semantic.attributes();
  }

  if (is(semantic, $.ValueSemantic) && semantic.type) {
    return semantic.type.attributes();
  }

  return nothing;
}

function createPropertyCompletionItem(name: String2, types: Array2<TypeSemantic>) {
  const item = new CompletionItem(name, CompletionItemKind.Property);
  const type = types.first();

  if (is(type, $.IdTypeSemantic)) {
    item.detail = type.declaration.name;
  }

  return item;
}
