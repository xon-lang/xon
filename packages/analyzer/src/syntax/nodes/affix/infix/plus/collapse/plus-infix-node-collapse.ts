import {
  $PlusOperatorNode,
  newPlusInfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  PlusInfixNode,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapsePlusInfixNode(): NodeCollapseFn<PlusInfixNode> {
  return {
    min: 3,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<PlusInfixNode> => {
      return nodes.firstMap((operatorNode, index) => {
        if (!is(operatorNode, $PlusOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        if (!leftNode?.canBeExpression || !rightNode?.canBeExpression) {
          return nothing;
        }

        return {node: newPlusInfixNode(leftNode, operatorNode, rightNode), index: index - 1};
      }, startIndex);
    },
  };
}
