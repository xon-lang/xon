import {$OperatorNode, infixNode, Node, NodeCollapseFn, NodeCollapseResult} from '#analyzer';
import {ArrayData, Boolean2, Dictionary, Integer, nothing, Text} from '#common';
import {$Type, is} from '#typing';

export function collapseInfixNode(
  similarPriorityOperators: Dictionary<Text, $Type>,
  isLeftRecursive: Boolean2,
): NodeCollapseFn {
  return (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult => {
    const method = isLeftRecursive ? 'firstMap' : 'lastMap';

    return nodes[method]((operatorNode, index) => {
      if (!is(operatorNode, $OperatorNode())) {
        return nothing;
      }

      const operatorType = similarPriorityOperators.get(operatorNode.text);

      if (!operatorType) {
        return nothing;
      }

      const leftNode = nodes.at2(index - 1);
      const rightNode = nodes.at2(index + 1);

      if (!leftNode.canBeExpression || !rightNode.canBeExpression) {
        return nothing;
      }

      return {node: infixNode(operatorType, leftNode, operatorNode, rightNode), index: index - 1};
    }, startIndex);
  };
}
