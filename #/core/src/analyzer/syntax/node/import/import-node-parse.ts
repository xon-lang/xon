import {Boolean2, Integer, is_v2, nothing, TextData} from '#common';
import {
  $OperatorNode,
  $StringNode,
  importNode,
  Node,
  nodeFindMap,
  SyntaxAnalyzer,
  SyntaxParseFn,
} from '#core';

export function importNodeParse(operator: TextData, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is_v2(node, $OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is_v2(value, $StringNode)) {
        return {node: importNode(analyzer, node, nothing), index};
      }

      return {node: importNode(analyzer, node, value), index};
    });
  };
}
