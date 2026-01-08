import {
  $AnalyzerType,
  $SyntaxNode,
  JoiningStartNode,
  JoiningWhitespaceNode,
  newSyntaxNode,
  nodesRange,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type JoiningNode = SyntaxNode &
  Brand<'Analyzer.JoiningNode'> & {
    start: JoiningStartNode;
    whitespace?: JoiningWhitespaceNode | Nothing;
  };

export const $JoiningNode = () => $AnalyzerType<JoiningNode>('JoiningNode', $SyntaxNode());

export function newJoiningNode(
  start: JoiningStartNode,
  whitespace?: JoiningWhitespaceNode | Nothing,
): JoiningNode {
  return newSyntaxNode({
    $: $JoiningNode(),
    isHidden: true,
    range: nodesRange(start, whitespace),

    start,
    whitespace,
  });
}
