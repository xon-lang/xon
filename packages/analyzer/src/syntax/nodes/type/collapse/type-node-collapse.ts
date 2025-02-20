import {
  $TypeOperatorNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  TypeNode,
  newTypeNode,
  newTypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseTypeNode(): NodeCollapseFn<TypeNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<TypeNode> => {
      return nodes.lastMap((operatorNode, index) => {
        if (!is(operatorNode, $TypeOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        const typeValueNode = newTypeValueNode(
          operatorNode,
          rightNode?.canBeExpression ? rightNode : nothing,
        );

        if (leftNode?.canBeExpression) {
          return {
            index: index - 1,
            deleteCount: 1 + typeValueNode.children!.count(),
            node: newTypeNode(leftNode, typeValueNode),
          };
        }

        return {
          index: index - 1,
          deleteCount: typeValueNode.children!.count(),
          node: newTypeNode(nothing, typeValueNode),
        };
      }, startIndex);
    },
  };
}
