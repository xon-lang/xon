import {$IdToken, AnalyzerContext, IdNode, newIdNode} from '#analyzer';
import {Nothing, nothing} from '#core';

export function parseIdNode(context: AnalyzerContext): IdNode | Nothing {
  const token = context.source.takeWord($IdToken());

  if (!token) {
    return nothing;
  }

  return newIdNode(token);
}
