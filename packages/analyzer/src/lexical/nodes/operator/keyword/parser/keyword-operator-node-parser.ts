import {$KeywordOperatorNode, AnalyzerContext, KEYWORD_OPERATORS, KeywordOperatorNode} from '#analyzer';
import {Nothing} from '#common';

export function parseKeywordOperatorNode(context: AnalyzerContext): KeywordOperatorNode | Nothing {
  return KEYWORD_OPERATORS.lastMap((o) =>
    context.source.takeWhile($KeywordOperatorNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );
}
