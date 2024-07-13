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
import {DeclarationSemantic} from '../../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {Semantic} from '../../../../../core/analyzer/semantic/node/semantic';
import {Array2, Nothing, nothing} from '../../../../../lib/types';
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
        return attributes.map(createPropertyCompletionItem);
      }
    }

    return nothing;
  }
}

function getAttributes(semantic: Semantic): Array2<DeclarationSemantic> | Nothing {
  if (is(semantic, $.TypeSemantic)) {
    return semantic.attributes().all();
  }

  if (is(semantic, $.ValueSemantic) && semantic.type) {
    return semantic.type.attributes().all();
  }

  return nothing;
}

function createPropertyCompletionItem(attribute: DeclarationSemantic): CompletionItem {
  const item = new CompletionItem(attribute.name, getCompletionItemKind(attribute));

  if (is(attribute.type, $.IdTypeSemantic)) {
    item.detail = attribute.type.declaration.name;
  }

  return item;
}

export function getCompletionItemKind(attribute: DeclarationSemantic): CompletionItemKind {
  if (attribute.parameters) {
    return CompletionItemKind.Method;
  }

  return CompletionItemKind.Field;
}
