import {$IdNode, AnalyzerContext, IdNode, UNDERSCORE} from '#analyzer';
import {Nothing} from '#common';

export function parseIdNode(context: AnalyzerContext): IdNode | Nothing {
  const node = context.source.takeWhile(
    $IdNode,
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || UNDERSCORE.equals(x),
  );

  if (node) {
    node.canBeExpression = true;
  }

  return node;
}
