import {$OperatorNode, OperatorNode, OPERATORS_SORTED} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseOperatorNode(source: CharStream): OperatorNode | Nothing {
  // todo use separate nodes for each operator
  return OPERATORS_SORTED.lastMap((o) =>
    source.takeWhile($OperatorNode, (x, i) => o.at2(i).equals(x), o.count()),
  );
}
