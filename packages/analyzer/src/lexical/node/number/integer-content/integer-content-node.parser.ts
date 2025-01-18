import {$IntegerContentNode, AnalyzerContext, IntegerContentNode, UNDERSCORE} from '#analyzer';
import {Nothing} from '#common';

export function parseIntegerContentNode(context: AnalyzerContext): IntegerContentNode | Nothing {
  return context.source.takeWhile(
    $IntegerContentNode,
    (x, i) => (i > 0 && x.equals(UNDERSCORE)) || x.isDigit(),
  );
}
