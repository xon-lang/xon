import {$GroupNode, invokeNode, Node, nodeFindMap, SyntaxAnalyzer, SyntaxParseFn} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function invokeNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (index === 0 || !is(node, $GroupNode)) {
        return nothing;
      }

      const instance = nodes.at2(index - 1);

      if (!instance.isExpression) {
        return nothing;
      }

      return {node: invokeNode(analyzer, instance, node), index: index - 1};
    });
  };
}
