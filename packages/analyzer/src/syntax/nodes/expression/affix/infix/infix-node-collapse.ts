import {
  $ExpressionNode,
  ExpressionNode,
  InfixNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  OperatorNode,
  PlusOperatorNode,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#core';
import {$Type, is} from '#typing';

export function collapseInfixNode<T extends $Type<OperatorNode>>(
  operatorType: T,
  construct: (left: ExpressionNode, operator: PlusOperatorNode, right: ExpressionNode) => InfixNode,
): NodeCollapseFn<InfixNode> {
  return {
    min: 3,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<InfixNode> => {
      return nodes.firstMap((operator, index) => {
        if (!is(operator, operatorType)) {
          return nothing;
        }

        const left = nodes.at(index - 1);
        const right = nodes.at(index + 1);

        if (!is(left, $ExpressionNode()) || !is(right, $ExpressionNode())) {
          return nothing;
        }

        return {
          index: index - 1,
          deleteCount: 3,
          node: construct(left, operator, right),
        };
      }, startIndex);
    },
  };
}
