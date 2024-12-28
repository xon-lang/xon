import {nothing, Nothing} from '#common';
import {
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $MemberNode,
  $TypeSemantic,
  $ValueSemantic,
  Semantic,
  ValueDeclarationSemantic,
} from '#core';
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

export class DotCompletionItemProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const semantic = getDocumentSemantic(document, this.channel);
    const node = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));

    if (is(node?.parent, $MemberNode) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);

      if (attributes) {
        return attributes.map(createAttributeCompletionItem);
      }
    }

    return nothing;
  }
}

function getAttributes(semantic: Semantic): ValueDeclarationSemantic[] | Nothing {
  if (is(semantic, $TypeSemantic)) {
    return semantic.attributes().all().toNativeArray();
  }

  if (is(semantic, $ValueSemantic) && semantic.type) {
    return semantic.type.attributes().all().toNativeArray();
  }

  return nothing;
}

function createAttributeCompletionItem(semantic: ValueDeclarationSemantic): CompletionItem {
  const item = new CompletionItem(semantic.name.toString(), getCompletionItemKind(semantic));

  if (is(semantic.type, $IdTypeSemantic) && semantic.type.declaration) {
    item.detail = semantic.type.declaration.name.toString();
  }

  return item;
}

export function getCompletionItemKind(semantic: ValueDeclarationSemantic): CompletionItemKind {
  if (is(semantic.type, $FunctionTypeSemantic)) {
    return CompletionItemKind.Method;
  }

  return CompletionItemKind.Field;
}
