import {
  $AnalyzerType,
  $InfixNode,
  AsOperatorNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  InfixNode,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type AsInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: ExpressionNode;
    operator: AsOperatorNode;
    right: ExpressionNode;
  };

export const $AsInfixNode = () => $AnalyzerType<AsInfixNode>('AsInfixNode', $InfixNode());

export function newAsInfixNode(
  left: ExpressionNode,
  operator: AsOperatorNode,
  right: ExpressionNode,
): AsInfixNode {
  return newSyntaxNode({
    $: $AsInfixNode(),
    left,
    operator,
    right,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
