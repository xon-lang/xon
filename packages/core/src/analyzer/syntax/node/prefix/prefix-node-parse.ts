import {Boolean2, Integer, nothing} from '#common';
import {Node, nodeFindMap, prefixNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is, isNonOperatorExpression} from '#typing';

export function prefixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $.OperatorNode) ||
        !operators.includes(node.text.toString()) ||
        (index !== 0 && !is(nodes[index - 1], $.OperatorNode))
      ) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!isNonOperatorExpression(value)) {
        return nothing;
      }

      return {node: prefixNode(analyzer, node, value), index: index};
    });
  };
}
