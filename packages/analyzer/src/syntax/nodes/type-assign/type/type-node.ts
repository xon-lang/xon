import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  OperatorExpressionNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type TypeNode = SyntaxNode &
  Brand<'Analyzer.TypeNode'> & {
    target?: Node | Nothing;
    type: OperatorExpressionNode;
  };

export const $TypeNode = () => $AnalyzerType<TypeNode>('TypeNode', $SyntaxNode());

export function newTypeNode(target: Node | Nothing, type: OperatorExpressionNode): TypeNode {
  return newSyntaxNode({
    $: $TypeNode(),
    target,
    type,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
