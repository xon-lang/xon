import {$JoiningNode, AnalyzerContext, CR, JOINING, JoiningNode, LF, SPACE} from '#analyzer';
import {Nothing} from '#common';

export function parseJoiningNode(context: AnalyzerContext): JoiningNode | Nothing {
  const node = context.source.takeWhile(
    $JoiningNode,
    (x, i) => x.equals(JOINING) || (i > 0 && (x.equals(SPACE) || x.equals(CR) || x.equals(LF))),
  );

  if (node) {
    node.isHidden = true;
  }

  return node;
}
