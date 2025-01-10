import {$DocumentationCloseNode, DOCUMENTATION_CLOSE, DocumentationCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseDocumentationCloseNode(source: CharStream): DocumentationCloseNode | Nothing {
  return source.takeWhile(
    $DocumentationCloseNode,
    (x, i) => DOCUMENTATION_CLOSE.at2(i).equals(x),
    DOCUMENTATION_CLOSE.count(),
  );
}
