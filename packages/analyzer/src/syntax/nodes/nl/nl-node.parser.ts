import {$NlNode, AnalyzerContext, CR, CRLF, LF, NlNode} from '#analyzer';
import {Nothing} from '#common';

export function parseNlNode(context: AnalyzerContext): NlNode | Nothing {
  const crlfNode = context.source.takeWhile($NlNode, (x, i) => CRLF.at2(i).equals(x), CRLF.count());
  const node = crlfNode ?? context.source.takeWhile($NlNode, (x, i) => x.equals(CR) || x.equals(LF), 1);

  if (node) {
    node.isHidden = true;
  }

  return node;
}
