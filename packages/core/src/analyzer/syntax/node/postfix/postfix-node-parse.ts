import {Boolean2, Integer, nothing} from '#common';
import {Node, nodeFindMap, postfixNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is, isNonOperatorExpression} from '#typing';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $.OperatorNode) ||
        !operators.includes(node.text.toString()) ||
        (index !== nodes.length - 1 && !is(nodes[index + 1], $.OperatorNode))
      ) {
        return nothing;
      }

      const value = nodes[index - 1];

      if (!isNonOperatorExpression(value)) {
        return nothing;
      }

      return {node: postfixNode(analyzer, value, node), index: index - 1};
    });
  };
}