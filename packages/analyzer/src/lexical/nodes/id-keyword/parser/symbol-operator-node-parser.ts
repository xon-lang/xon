import {$SymbolOperatorNode, AnalyzerContext, OperatorNode, SYMBOL_OPERATORS} from '#analyzer';
import {Nothing} from '#common';

export const OPERATORS = SYMBOL_OPERATORS.sort((a, b) => a.count() - b.count());

export function parseSymbolOperatorNode(context: AnalyzerContext): OperatorNode | Nothing {
  return OPERATORS.lastMap((o) =>
    context.source.takeWhile($SymbolOperatorNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );
}
