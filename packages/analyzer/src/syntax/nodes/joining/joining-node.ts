import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  JoiningStartNode,
  JoiningWhitespaceNode,
  newSyntaxNode,
  SemanticContext,
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
    start,
    whitespace,
    isHidden: true,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
