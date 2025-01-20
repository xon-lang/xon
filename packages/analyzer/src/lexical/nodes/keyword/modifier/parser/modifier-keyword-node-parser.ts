import {$ModifierKeywordNode, AnalyzerContext, MODIFIER_KEYWORDS, ModifierKeywordNode} from '#analyzer';
import {Nothing} from '#common';

export function parseModifierKeywordNode(context: AnalyzerContext): ModifierKeywordNode | Nothing {
  return MODIFIER_KEYWORDS.lastMap((o) =>
    context.source.takeWhile($ModifierKeywordNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );
}
