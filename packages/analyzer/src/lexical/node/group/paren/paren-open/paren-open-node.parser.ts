import {$ParenOpenNode, AnalyzerContext, PAREN_OPEN, ParenOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseParenOpenNode(context: AnalyzerContext): ParenOpenNode | Nothing {
  return context.source.takeWhile($ParenOpenNode, (x, i) => PAREN_OPEN.at2(i).equals(x), PAREN_OPEN.count());
}
