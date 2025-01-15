import {$DocumentationOpenNode, DOCUMENTATION_OPEN, DocumentationOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseDocumentationOpenNode(source: CharStream): DocumentationOpenNode | Nothing {
  return source.takeWhile(
    $DocumentationOpenNode,
    (x, i) => DOCUMENTATION_OPEN.at2(i).equals(x),
    DOCUMENTATION_OPEN.count(),
  );
}
