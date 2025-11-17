import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  ReturnKeywordNode,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type ReturnStatementNode = StatementNode &
  Brand<'Analyzer.ReturnStatementNode'> & {
    keyword: ReturnKeywordNode;
    expression?: Node | Nothing;
  };

export const $ReturnStatementNode = () =>
  $AnalyzerType<ReturnStatementNode>('ReturnStatementNode', $StatementNode());

export function newReturnStatementNode(
  keyword: ReturnKeywordNode,
  expression?: Node | Nothing,
): ReturnStatementNode {
  return newSyntaxNode<ReturnStatementNode>({
    $: $ReturnStatementNode(),
    keyword,
    expression,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
