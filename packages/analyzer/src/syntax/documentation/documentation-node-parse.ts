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
} from '#analyzer';
import {newArrayData, newTextReference, Nothing, nothing, rangeFromNodes} from '#common';
import {is} from '#typing';

export function documentationNodeParse(
  analyzer: SyntaxAnalyzer,
  openNode: DocumentationOpenNode,
): DocumentationNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(documentationLexicalParsers());
  let description: DocumentationDescriptionNode | Nothing = nothing;
  const items = newArrayData<DocumentationItemNode>();

  for (const node of iterator) {
    if (is(node, $DocumentationDescriptionNode)) {
      if (items.isEmpty()) {
        description = node;
      } else {
        const lastItem = items.last()!;
        lastItem.description = node;
        lastItem.children.addLastItem(node);
        const range = rangeFromNodes(lastItem.children);
        lastItem.reference = newTextReference(analyzer.resource, range);
      }

      continue;
    }

    if (is(node, $DocumentationLabelNode)) {
      items.addLastItem(documentationItemNode(analyzer, node));

      continue;
    }

    if (is(node, $DocumentationCloseNode)) {
      return documentationNode(analyzer, openNode, description, items, node);
    }
  }

  return documentationNode(analyzer, openNode, description, items);
}
