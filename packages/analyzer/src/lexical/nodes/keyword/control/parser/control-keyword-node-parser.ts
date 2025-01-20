import {$ControlKeywordNode, AnalyzerContext, CONTROL_KEYWORDS, ControlKeywordNode} from '#analyzer';
import {Nothing} from '#common';

export function parseControlKeywordNode(context: AnalyzerContext): ControlKeywordNode | Nothing {
  return CONTROL_KEYWORDS.lastMap((o) =>
    context.source.takeWhile($ControlKeywordNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );
}
