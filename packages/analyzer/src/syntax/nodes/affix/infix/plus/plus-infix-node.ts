import {
  $AnalyzerType,
  $InfixNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  InfixNode,
  newSyntaxNode,
  Node,
  PlusOperatorNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type PlusInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: Node;
    operator: PlusOperatorNode;
    right: Node;
  };

export const $PlusInfixNode = () => $AnalyzerType<PlusInfixNode>('PlusInfixNode', $InfixNode());

export function newPlusInfixNode(left: Node, operator: PlusOperatorNode, right: Node): PlusInfixNode {
  return newSyntaxNode({
    $: $PlusInfixNode(),
    canBeExpression: true,
    left,
    operator,
    right,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
