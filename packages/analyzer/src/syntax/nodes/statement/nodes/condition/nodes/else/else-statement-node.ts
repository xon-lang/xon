import {
  $AnalyzerType,
  $SyntaxNode,
  ElseKeywordNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Brand} from '#core';

export type ElseStatementNode = SyntaxNode &
  Brand<'Analyzer.ElseStatementNode'> & {
    keyword: ElseKeywordNode;
  };

export const $ElseStatementNode = () => $AnalyzerType<ElseStatementNode>('ElseStatementNode', $SyntaxNode());

export function newElseStatementNode(keyword: ElseKeywordNode): ElseStatementNode {
  return newSyntaxNode<ElseStatementNode>({
    $: $ElseStatementNode(),
    keyword,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
