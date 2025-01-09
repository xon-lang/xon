import {
  $DocumentationDescriptionNode,
  AT,
  DOCUMENTATION_CLOSE,
  DocumentationDescriptionNode,
} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseDocumentationDescriptionNode(
  source: CharStream,
): DocumentationDescriptionNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((_x, i, z) => !z.startsWith(AT, i) && !z.startsWith(DOCUMENTATION_CLOSE, i));

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $DocumentationDescriptionNode, text, range};
}
