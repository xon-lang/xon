import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  IfKeywordNode,
  newSyntaxNode,
  Node,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type IfStatementNode = StatementNode &
  Brand<'Analyzer.IfStatementNode'> & {
    keyword: IfKeywordNode;
    expression?: Node | Nothing;
  };

export const $IfStatementNode = () => $AnalyzerType<IfStatementNode>('IfStatementNode', $StatementNode());

export function newIfStatementNode(keyword: IfKeywordNode, expression?: Node | Nothing): IfStatementNode {
  return newSyntaxNode<IfStatementNode>({
    $: $IfStatementNode(),
    keyword,
    expression,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
