import {
  $AssignOperatorNode,
  $TypeNode,
  AssignNode,
  newAssignNode,
  newAssignValueNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseAssignNode(): NodeCollapseFn<AssignNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<AssignNode> => {
      return nodes.lastMap((operatorNode, index) => {
        if (!is(operatorNode, $AssignOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        const assignValueNode = newAssignValueNode(
          operatorNode,
          rightNode?.canBeExpression ? rightNode : nothing,
        );

        if (leftNode?.canBeExpression || is(leftNode, $TypeNode())) {
          return {
            index: index - 1,
            deleteCount: 1 + assignValueNode.children!.count(),
            node: newAssignNode(leftNode, assignValueNode),
          };
        }

        return {
          index: index - 1,
          deleteCount: assignValueNode.children!.count(),
          node: newAssignNode(nothing, assignValueNode),
        };
      }, startIndex);
    },
  };
}
