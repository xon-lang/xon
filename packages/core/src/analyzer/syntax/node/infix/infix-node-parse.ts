import {Boolean2, Integer, nothing} from '#common';
import {infixNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is, isNonOperatorExpression} from '#typing';

export function infixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !operators.includes(node.text.toString())) {
        return nothing;
      }

      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (!isNonOperatorExpression(left) || !isNonOperatorExpression(right)) {
        return nothing;
      }

      return {node: infixNode(analyzer, left, node, right), index: index - 1};
    });
  };
}
