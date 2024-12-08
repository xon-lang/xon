import {ArrayData, Integer, is_v2, nothing, TextData} from '#common';
import {$IdNode, $OperatorNode, memberNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';

export function memberNodeParse(operators: ArrayData<TextData>): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is_v2(node, $OperatorNode) || !operators.hasItem(node.text)) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!instance.isExpression) {
        return nothing;
      }

      const right = nodes[index + 1];
      const id = is_v2(right, $IdNode) ? right : nothing;

      return {node: memberNode(analyzer, instance, node, id), index: index - 1};
    });
  };
}
