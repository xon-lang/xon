import {$AnalyzerType, $InfixNode, InfixNode, newSyntaxNode, Node, TypeOperatorNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeInfixNode = InfixNode &
  Brand<'Analyzer.TypeInfixNode'> & {
    leftNode: Node;
    operator: TypeOperatorNode;
    rightNode?: Node | Nothing;
  };

export const $TypeInfixNode = () => $AnalyzerType<TypeInfixNode>('TypeInfixNode', $InfixNode());

export function newTypeInfixNode(
  leftNode: Node,
  operatorNode: TypeOperatorNode,
  rightNode?: Node | Nothing,
): TypeInfixNode {
  return newSyntaxNode({$: $TypeInfixNode(), canBeExpression: false, leftNode, operatorNode, rightNode});
}
