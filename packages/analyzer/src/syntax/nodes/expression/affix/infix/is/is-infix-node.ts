import {
  $AnalyzerType,
  $InfixNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  InfixNode,
  IsOperatorNode,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type IsInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: ExpressionNode;
    operator: IsOperatorNode;
    right: ExpressionNode;
  };

export const $IsInfixNode = () => $AnalyzerType<IsInfixNode>('IsInfixNode', $InfixNode());

export function newIsInfixNode(
  left: ExpressionNode,
  operator: IsOperatorNode,
  right: ExpressionNode,
): IsInfixNode {
  return newSyntaxNode({
    $: $IsInfixNode(),
    left,
    operator,
    right,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
