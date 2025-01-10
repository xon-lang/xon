import {
  $DocumentationDescriptionNode,
  AT,
  DOCUMENTATION_CLOSE,
  DocumentationDescriptionNode,
} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseDocumentationDescriptionNode(
  source: CharStream,
): DocumentationDescriptionNode | Nothing {
  return source.takeWhile(
    $DocumentationDescriptionNode,
    (_x, i, z) => !z.startsWith(AT, i) && !z.startsWith(DOCUMENTATION_CLOSE, i),
  );
}
