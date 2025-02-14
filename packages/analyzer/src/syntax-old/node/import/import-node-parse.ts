import {
  $OperatorNode,
  $StringNode,
  importNode,
  Node,
  nodeFindMap,
  SyntaxAnalyzer,
  SyntaxParseFn,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {is} from '#typing';

export function importNodeParse(operator: Text, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes.at(index + 1);

      if (!is(value, $StringNode)) {
        return {node: importNode(analyzer, node, nothing), index};
      }

      return {node: importNode(analyzer, node, value), index};
    });
  };
}
