import {$OperatorNode, Node, nodeFindMap, returnNode, SyntaxAnalyzer, SyntaxParseFn} from '#analyzer';
import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {is} from '#typing';

export function returnNodeParse(operator: Text, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes.at2(index + 1);

      if (!value.isExpression) {
        return {node: returnNode(analyzer, node, nothing), index};
      }

      return {node: returnNode(analyzer, node, value), index};
    });
  };
}
