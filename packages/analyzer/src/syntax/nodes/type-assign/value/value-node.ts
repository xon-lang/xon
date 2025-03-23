import {
  $AnalyzerType,
  $InfixNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  OperatorExpressionNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ValueNode = SyntaxNode &
  Brand<'Analyzer.ValueNode'> & {
    target?: Node | Nothing;
    value: OperatorExpressionNode;
  };

export const $ValueNode = () => $AnalyzerType<ValueNode>('ValueNode', $InfixNode());

export function newValueNode(target: Node | Nothing, value: OperatorExpressionNode): ValueNode {
  return newSyntaxNode({
    $: $ValueNode(),
    target,
    value,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
