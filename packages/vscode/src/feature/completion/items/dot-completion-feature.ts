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
import {ValueDeclarationSemantic} from '../../../../../core/analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {Semantic} from '../../../../../core/analyzer/semantic/node/semantic';
import {Nothing, nothing} from '../../../../../lib/types';
import {convertVscodePosition} from '../../../util/convert';
import {getDocumentSemantic} from '../../../util/util';

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

    if (is(node?.parent, $.MemberNode) && node.parent.instance.semantic) {
      const attributes = getAttributes(node.parent.instance.semantic);

      if (attributes) {
        return attributes.map(createAttributeCompletionItem);
      }
    }

    return nothing;
  }
}

function getAttributes(semantic: Semantic): ValueDeclarationSemantic[] | Nothing {
  if (is(semantic, $.TypeSemantic)) {
    return semantic.attributes().all();
  }

  if (is(semantic, $.ValueSemantic) && semantic.type) {
    return semantic.type.attributes().all();
  }

  return nothing;
}

function createAttributeCompletionItem(semantic: ValueDeclarationSemantic): CompletionItem {
  const item = new CompletionItem(semantic.name, getCompletionItemKind(semantic));

  if (is(semantic.type, $.IdTypeSemantic) && semantic.type.declaration) {
    item.detail = semantic.type.declaration.name;
  }

  return item;
}

export function getCompletionItemKind(semantic: ValueDeclarationSemantic): CompletionItemKind {
  if (is(semantic.type, $.FunctionTypeSemantic)) {
    return CompletionItemKind.Method;
  }

  return CompletionItemKind.Field;
}
