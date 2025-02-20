import {$AnalyzerType, $InfixNode, InfixNode, newSyntaxNode, Node, PlusOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type PlusInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    leftNode: Node;
    operator: PlusOperatorNode;
    rightNode: Node;
  };

export const $PlusInfixNode = () => $AnalyzerType<PlusInfixNode>('PlusInfixNode', $InfixNode());

export function newPlusInfixNode(
  leftNode: Node,
  operatorNode: PlusOperatorNode,
  rightNode: Node,
): PlusInfixNode {
  return newSyntaxNode({$: $PlusInfixNode(), canBeExpression: true, leftNode, operatorNode, rightNode});
}
