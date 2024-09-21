import {Boolean2, Integer, nothing, String2} from '#common';
import {Node, nodeFindMap, returnNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is} from '#typing';

export function returnNodeParse(operator: String2, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is(value, $.ExpressionNode)) {
        return {node: returnNode(analyzer, node, nothing), index};
      }

      return {node: returnNode(analyzer, node, value), index};
    });
  };
}
