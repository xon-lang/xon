import {ArrayData, Integer, nothing, Text} from '#common';
import {$IdNode, $OperatorNode, memberNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {is} from '#typing';

export function memberNodeParse(operators: ArrayData<Text>): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !operators.hasItem(node.text)) {
        return nothing;
      }

      const instance = nodes.at2(index - 1);

      if (!instance.isExpression) {
        return nothing;
      }

      const right = nodes.at(index + 1);
      const id = is(right, $IdNode) ? right : nothing;

      return {node: memberNode(analyzer, instance, node, id), index: index - 1};
    });
  };
}
