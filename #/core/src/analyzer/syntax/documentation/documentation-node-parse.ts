import {Nothing, nothing, rangeFromNodes, textResourceRange} from '#common';
import {
  $DocumentationCloseNode,
  $DocumentationDescriptionNode,
  $DocumentationLabelNode,
  DocumentationDescriptionNode,
  DocumentationItemNode,
  documentationItemNode,
  documentationLexicalParsers,
  DocumentationNode,
  documentationNode,
  DocumentationOpenNode,
  SyntaxAnalyzer,
} from '#core';
import {is} from '#typing';

export function documentationNodeParse(
  analyzer: SyntaxAnalyzer,
  openNode: DocumentationOpenNode,
): DocumentationNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(documentationLexicalParsers());
  let description: DocumentationDescriptionNode | Nothing = nothing;
  const items: DocumentationItemNode[] = [];

  for (const node of iterator) {
    if (is(node, $DocumentationDescriptionNode)) {
      if (items.length === 0) {
        description = node;
      } else {
        const lastItem = items.last()!;
        lastItem.description = node;
        lastItem.children.push(node);
        const range = rangeFromNodes(lastItem.children);
        lastItem.reference = textResourceRange(analyzer.resource, range);
      }

      continue;
    }

    if (is(node, $DocumentationLabelNode)) {
      items.push(documentationItemNode(analyzer, node));

      continue;
    }

    if (is(node, $DocumentationCloseNode)) {
      return documentationNode(analyzer, openNode, description, items, node);
    }
  }

  return documentationNode(analyzer, openNode, description, items);
}
