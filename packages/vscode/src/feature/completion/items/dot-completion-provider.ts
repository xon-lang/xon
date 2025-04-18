import {
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $MemberNode,
  $TypeSemantic,
  AttributeDeclarationSemantic,
  MemberNode,
  Semantic,
} from '#analyzer';
import {ArrayData, nothing, Nothing} from '#common';
import {is} from '#typing';
import {newTextDocumentAnalyzer, vsCodeToXonPosition} from '#vscode';
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

export class DotCompletionProvider implements CompletionItemProvider {
  constructor(private channel: OutputChannel) {}

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    _context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    const analyzer = newTextDocumentAnalyzer(document, this.channel);

    const node = analyzer.findClosestNode(
      (node): node is MemberNode => is(node, $MemberNode()),
      vsCodeToXonPosition(document, position.with({character: position.character - 1})),
    );

    if (!node?.instance.semantic) {
      return;
    }

    console.log(node?.instance.semantic);

    const attributes = getAttributes(node.instance.semantic);

    return attributes?.map(createCompletionItem).toNativeArray();
  }
}

function getAttributes(semantic: Semantic): ArrayData<AttributeDeclarationSemantic> | Nothing {
  if (is(semantic, $TypeSemantic())) {
    return semantic.scope?.all();
  }

  // if (is(semantic, $ValueSemantic()) && semantic.type) {
  //   return semantic.type.attributes().all();
  // }

  return nothing;
}

function createCompletionItem(semantic: AttributeDeclarationSemantic): CompletionItem {
  const item = new CompletionItem(semantic.name.toNativeString(), getCompletionItemKind(semantic));

  if (is(semantic.type, $IdTypeSemantic()) && semantic.type.declaration) {
    item.detail = semantic.type.declaration.name.toNativeString();
  }

  return item;
}

export function getCompletionItemKind(semantic: AttributeDeclarationSemantic): CompletionItemKind {
  if (is(semantic.type, $FunctionTypeSemantic())) {
    return CompletionItemKind.Method;
  }

  return CompletionItemKind.Field;
}
