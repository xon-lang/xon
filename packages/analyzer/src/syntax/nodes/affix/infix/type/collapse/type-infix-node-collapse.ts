import {
  $TypeOperatorNode,
  TypeInfixNode,
  newTypeInfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseTypeInfixNode(): NodeCollapseFn<TypeInfixNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<TypeInfixNode> => {
      return nodes.lastMap((operatorNode, index) => {
        if (!is(operatorNode, $TypeOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        if (!leftNode?.canBeExpression) {
          return nothing;
        }

        if (rightNode?.canBeExpression) {
          return {node: newTypeInfixNode(leftNode, operatorNode, rightNode), index: index - 1};
        }

        return {node: newTypeInfixNode(leftNode, operatorNode, nothing), index: index - 1};
      }, startIndex);
    },
  };
}
