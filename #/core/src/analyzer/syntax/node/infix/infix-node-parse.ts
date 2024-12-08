import {ArrayData, Boolean2, Integer, is_v2, nothing, TextData} from '#common';
import {$OperatorNode, infixNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';

export function infixNodeParse(operators: ArrayData<TextData>, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is_v2(node, $OperatorNode) || !operators.hasItem(node.text)) {
        return nothing;
      }

      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (!left.isExpression || !right.isExpression) {
        return nothing;
      }

      return {node: infixNode(analyzer, left, node, right), index: index - 1};
    });
  };
}
