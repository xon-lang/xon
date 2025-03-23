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

export type TypeNode = SyntaxNode &
  Brand<'Analyzer.TypeNode'> & {
    target?: Node | Nothing;
    type: OperatorExpressionNode;
  };

export const $TypeNode = () => $AnalyzerType<TypeNode>('TypeNode', $InfixNode());

export function newTypeNode(target: Node | Nothing, type: OperatorExpressionNode): TypeNode {
  return newSyntaxNode({
    $: $TypeNode(),
    target,
    type,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
