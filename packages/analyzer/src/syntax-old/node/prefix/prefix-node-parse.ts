import {$OperatorNode, Node, nodeFindMap, prefixNode, SyntaxAnalyzer, SyntaxParseFn} from '#analyzer';
import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {is} from '#typing';

export function prefixNodeParse(operators: ArrayData<Text>, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $OperatorNode) ||
        !operators.hasItem(node.text) ||
        (index !== 0 && !is(nodes.at(index - 1), $OperatorNode))
      ) {
        return nothing;
      }

      const value = nodes.at2(index + 1);

      if (!value.isExpression) {
        return nothing;
      }

      return {node: prefixNode(analyzer, node, value), index: index};
    });
  };
}
