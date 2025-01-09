import {
  DocumentationLabelNode,
  DocumentationNode,
  newDocumentationNode,
  parseDocumentationCloseNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelNode,
  parseDocumentationOpenNode,
} from '#analyzer';
import {CharStream, newArrayData, nothing, Nothing} from '#common';

export function parseDocumentationNode(source: CharStream): DocumentationNode | Nothing {
  const openNode = parseDocumentationOpenNode(source);

  if (!openNode) {
    return nothing;
  }

  const descriptionNode = parseDocumentationDescriptionNode(source);
  const labels = newArrayData(labelIterator(source));
  const closeNodeNode = parseDocumentationCloseNode(source);

  return newDocumentationNode(openNode, descriptionNode, labels, closeNodeNode);
}

function labelIterator(source: CharStream): IterableIterator<DocumentationLabelNode> {
  return {
    next(): IteratorResult<DocumentationLabelNode> {
      const labelNode = parseDocumentationLabelNode(source);

      return {
        done: !labelNode,
        value: labelNode!,
      };
    },

    [Symbol.iterator](): IterableIterator<DocumentationLabelNode> {
      return this;
    },
  };
}
