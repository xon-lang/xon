import {Integer, nothing} from '#common';
import {$GroupNode, invokeNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {is} from '#typing';

export function invokeNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (index === 0 || !is(node, $GroupNode())) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!instance.isExpression) {
        return nothing;
      }

      return {node: invokeNode(analyzer, instance, node), index: index - 1};
    });
  };
}
