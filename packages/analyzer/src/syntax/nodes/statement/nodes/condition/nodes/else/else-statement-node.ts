import {
  $AnalyzerType,
  $StatementNode,
  ElseKeywordNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Brand, Integer} from '#core';

export type ElseStatementNode = StatementNode &
  Brand<'Analyzer.ElseStatementNode'> & {
    keyword: ElseKeywordNode;
  };

export const $ElseStatementNode = () =>
  $AnalyzerType<ElseStatementNode>('ElseStatementNode', $StatementNode());

export function newElseStatementNode(indent: Integer, keyword: ElseKeywordNode): ElseStatementNode {
  return newSyntaxNode<ElseStatementNode>({
    $: $ElseStatementNode(),
    indent,
    keyword,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
