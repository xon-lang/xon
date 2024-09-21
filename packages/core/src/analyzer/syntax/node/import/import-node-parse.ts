import {Boolean2, Integer, nothing, String2} from '#common';
import {importNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is} from '#typing';

export function importNodeParse(operator: String2, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is(value, $.StringNode)) {
        return {node: importNode(analyzer, node, nothing), index};
      }

      return {node: importNode(analyzer, node, value), index};
    });
  };
}
