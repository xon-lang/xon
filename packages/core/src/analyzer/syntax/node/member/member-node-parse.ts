import {Integer, nothing} from '#common';
import {memberNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is, isNonOperatorExpression} from '#typing';

export function memberNodeParse(operators: String[]): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !operators.includes(node.text.toString())) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!isNonOperatorExpression(instance)) {
        return nothing;
      }

      const right = nodes[index + 1];
      const id = is(right, $.IdNode) ? right : nothing;

      return {node: memberNode(analyzer, instance, node, id), index: index - 1};
    });
  };
}
