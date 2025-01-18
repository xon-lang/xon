import {$OperatorNode, AnalyzerContext, OperatorNode, OPERATORS_SORTED} from '#analyzer';
import {Nothing} from '#common';

export function parseOperatorNode(context: AnalyzerContext): OperatorNode | Nothing {
  // todo use separate nodes for each operator
  return OPERATORS_SORTED.lastMap((o) =>
    context.source.takeWhile($OperatorNode, (x, i) => o.at2(i).equals(x), o.count()),
  );
}
