import {$AnalyzerType, $InfixNode, InfixNode, newSyntaxNode, Node, PlusOperatorNode} from '#analyzer';
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
  });
}
