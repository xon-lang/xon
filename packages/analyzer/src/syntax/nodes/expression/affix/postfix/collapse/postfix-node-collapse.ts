import {
  $ExpressionNode,
  $OperatorNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  postfixNode,
} from '#analyzer';
import {$Type, ArrayData, Boolean2, Dictionary, Integer, is, nothing, Text} from '#core';

export function collapsePostfixNode(
  similarPriorityOperators: Dictionary<Text, $Type>,
  isLeftRecursive: Boolean2,
): NodeCollapseFn {
  return {
    min: 2,

    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult => {
      const method = isLeftRecursive ? 'firstMap' : 'lastMap';

      return nodes[method]((operator, index) => {
        if (!is(operator, $OperatorNode())) {
          return nothing;
        }

        const operatorType = similarPriorityOperators.get(operator.text);

        if (!operatorType) {
          return nothing;
        }

        const valueNode = nodes.at2(index - 1);

        if (!is(valueNode, $ExpressionNode())) {
          return nothing;
        }

        return {node: postfixNode(operatorType, valueNode, operator), index: index - 1, deleteCount: 2};
      }, startIndex);
    },
  };
}
