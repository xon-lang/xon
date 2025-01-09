import {$DocumentationCloseNode, DOCUMENTATION_CLOSE, DocumentationCloseNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseDocumentationCloseNode(source: CharStream): DocumentationCloseNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => DOCUMENTATION_CLOSE.at2(i).equals(x), DOCUMENTATION_CLOSE.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $DocumentationCloseNode, text, range};
}
