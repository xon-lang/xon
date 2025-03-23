import {
  $ExpressionNode,
  $TypeOperatorNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  TypeNode,
  newOperatorExpressionNode,
  newTypeNode,
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

        const operatorExpressionNode = newOperatorExpressionNode(
          operatorNode,
          is(rightNode, $ExpressionNode()) ? rightNode : nothing,
        );

        if (is(leftNode, $ExpressionNode())) {
          return {
            index: index - 1,
            deleteCount: 1 + operatorExpressionNode.children!.count(),
            node: newTypeNode(leftNode, operatorExpressionNode),
          };
        }

        return {
          index: index - 1,
          deleteCount: operatorExpressionNode.children!.count(),
          node: newTypeNode(nothing, operatorExpressionNode),
        };
      }, startIndex);
    },
  };
}
