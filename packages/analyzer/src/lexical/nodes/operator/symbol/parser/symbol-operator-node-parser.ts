import {$SymbolOperatorNode, AnalyzerContext, SYMBOL_OPERATORS, SymbolOperatorNode} from '#analyzer';
import {Nothing} from '#common';

export function parseSymbolOperatorNode(context: AnalyzerContext): SymbolOperatorNode | Nothing {
  return SYMBOL_OPERATORS.lastMap((o) =>
    context.source.takeWhile($SymbolOperatorNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );
}
