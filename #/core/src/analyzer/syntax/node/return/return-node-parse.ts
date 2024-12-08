import {Boolean2, Integer, is, nothing, TextData} from '#common';
import {$OperatorNode, Node, nodeFindMap, returnNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';

export function returnNodeParse(operator: TextData, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!value.isExpression) {
        return {node: returnNode(analyzer, node, nothing), index};
      }

      return {node: returnNode(analyzer, node, value), index};
    });
  };
}
