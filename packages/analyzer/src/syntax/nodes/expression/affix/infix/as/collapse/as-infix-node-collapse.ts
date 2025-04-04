import {
  $AsOperatorNode,
  $ExpressionNode,
  AsInfixNode,
  newAsInfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseAsInfixNode(): NodeCollapseFn<AsInfixNode> {
  return {
    min: 3,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<AsInfixNode> => {
      return nodes.firstMap((operatorNode, index) => {
        if (!is(operatorNode, $AsOperatorNode())) {
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
          node: newAsInfixNode(leftNode, operatorNode, rightNode),
        };
      }, startIndex);
    },
  };
}
