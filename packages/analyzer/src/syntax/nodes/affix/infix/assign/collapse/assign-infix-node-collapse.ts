import {
  $AssignOperatorNode,
  AssignInfixNode,
  newAssignInfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseAssignInfixNode(): NodeCollapseFn<AssignInfixNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<AssignInfixNode> => {
      return nodes.lastMap((operatorNode, index) => {
        if (!is(operatorNode, $AssignOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        if (!leftNode?.canBeExpression) {
          return nothing;
        }

        if (rightNode?.canBeExpression) {
          return {node: newAssignInfixNode(leftNode, operatorNode, rightNode), index: index - 1};
        }

        return {node: newAssignInfixNode(leftNode, operatorNode, nothing), index: index - 1};
      }, startIndex);
    },
  };
}
