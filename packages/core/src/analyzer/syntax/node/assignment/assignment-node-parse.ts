import {Integer, nothing} from '#common';
import {ASSIGN, assignmentNode, Node, nodeFindMap, prefixNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {$, is, isNonOperatorExpression} from '#typing';

export function assignmentNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(ASSIGN)) {
        return nothing;
      }

      const id = nodes[index - 1];
      const value = nodes[index + 1];

      if (!is(id, $.IdNode) || !isNonOperatorExpression(value)) {
        return nothing;
      }

      const assign = prefixNode(analyzer, node, value);

      return {node: assignmentNode(analyzer, id, assign), index: index - 1, deleteCount: 3};
    });
  };
}
