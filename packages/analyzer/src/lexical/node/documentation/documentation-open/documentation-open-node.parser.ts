import {$DocumentationOpenNode, DOCUMENTATION_OPEN, DocumentationOpenNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseDocumentationOpenNode(source: CharStream): DocumentationOpenNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => DOCUMENTATION_OPEN.at2(i).equals(x), DOCUMENTATION_OPEN.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $DocumentationOpenNode, text, range};
}
