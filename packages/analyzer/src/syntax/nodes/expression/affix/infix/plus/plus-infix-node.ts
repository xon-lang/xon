import {
  $AnalyzerType,
  $InfixNode,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  InfixNode,
  newSyntaxNode,
  PlusOperatorNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type PlusInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: ExpressionNode;
    operator: PlusOperatorNode;
    right: ExpressionNode;
  };

export const $PlusInfixNode = () => $AnalyzerType<PlusInfixNode>('PlusInfixNode', $InfixNode());

export function newPlusInfixNode(
  left: ExpressionNode,
  operator: PlusOperatorNode,
  right: ExpressionNode,
): PlusInfixNode {
  return newSyntaxNode({
    $: $PlusInfixNode(),
    left,
    operator,
    right,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
