import {
  $AnalyzerType,
  $InfixNode,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  InfixNode,
  IsOperatorNode,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type UnionInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: ExpressionNode;
    operator: IsOperatorNode;
    right: ExpressionNode;
  };

export const $UnionInfixNode = () => $AnalyzerType<UnionInfixNode>('UnionInfixNode', $InfixNode());

export function newUnionInfixNode(
  left: ExpressionNode,
  operator: IsOperatorNode,
  right: ExpressionNode,
): UnionInfixNode {
  return newSyntaxNode({
    $: $UnionInfixNode(),
    left,
    operator,
    right,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
