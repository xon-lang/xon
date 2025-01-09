import {$DocumentationLabelOperatorNode, AT, DocumentationLabelOperatorNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseDocumentationLabelOperatorNode(
  source: CharStream,
): DocumentationLabelOperatorNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => AT.at2(i).equals(x), AT.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $DocumentationLabelOperatorNode, text, range};
}
