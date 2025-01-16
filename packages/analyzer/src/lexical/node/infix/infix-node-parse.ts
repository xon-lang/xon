import {$OperatorNode, infixNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#analyzer';
import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {is} from '#typing';

export function parseInfixNode(operators: ArrayData<Text>, isLeftRecursive: Boolean2): SyntaxParseFn {
  return ( nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !operators.hasItem(node.text)) {
        return nothing;
      }

      const left = nodes.at2(index - 1);
      const right = nodes.at2(index + 1);

      if (!left.isExpression || !right.isExpression) {
        return nothing;
      }

      return {node: infixNode( left, node, right), index: index - 1};
    });
  };
}
