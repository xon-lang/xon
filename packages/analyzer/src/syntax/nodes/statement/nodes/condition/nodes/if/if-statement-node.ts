import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  IfKeywordNode,
  newSyntaxNode,
  Node,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type IfStatementNode = SyntaxNode &
  Brand<'Analyzer.IfStatementNode'> & {
    keyword: IfKeywordNode;
    expression?: Node | Nothing;
  };

export const $IfStatementNode = () => $AnalyzerType<IfStatementNode>('IfStatementNode', $SyntaxNode());

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
