import {
  $ExpressionNode,
  $IsOperatorNode,
  IsInfixNode,
  newIsInfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseIsInfixNode(): NodeCollapseFn<IsInfixNode> {
  return {
    min: 3,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<IsInfixNode> => {
      return nodes.firstMap((operatorNode, index) => {
        if (!is(operatorNode, $IsOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        if (!is(leftNode, $ExpressionNode()) || !is(rightNode, $ExpressionNode())) {
          return nothing;
        }

        return {
          index: index - 1,
          deleteCount: 3,
          node: newIsInfixNode(leftNode, operatorNode, rightNode),
        };
      }, startIndex);
    },
  };
}
