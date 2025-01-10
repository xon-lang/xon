import {$DocumentationLabelOperatorNode, AT, DocumentationLabelOperatorNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseDocumentationLabelOperatorNode(
  source: CharStream,
): DocumentationLabelOperatorNode | Nothing {
  return source.takeWhile($DocumentationLabelOperatorNode, (x, i) => AT.at2(i).equals(x), AT.count());
}
