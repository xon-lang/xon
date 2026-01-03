import {$JoiningStartNode, AnalyzerContext, JOINING, JoiningStartNode} from '#analyzer';
import {Nothing} from '#core';

export function parseJoiningStartNode(context: AnalyzerContext): JoiningStartNode | Nothing {
  return context.source.takeCharacter($JoiningStartNode(), JOINING);
}
