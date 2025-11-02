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

export type ValueNode = SyntaxNode &
  Brand<'Analyzer.ValueNode'> & {
    target?: Node | Nothing;
    value: OperatorExpressionNode;
  };

export const $ValueNode = () => $AnalyzerType<ValueNode>('ValueNode', $SyntaxNode());

export function newValueNode(target: Node | Nothing, value: OperatorExpressionNode): ValueNode {
  return newSyntaxNode({
    $: $ValueNode(),
    target,
    value,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
