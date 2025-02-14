import {$OperatorNode, Node, nodeFindMap, postfixNode, SyntaxAnalyzer, SyntaxParseFn} from '#analyzer';
import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {is} from '#typing';

export function postfixNodeParse(operators: ArrayData<Text>, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $OperatorNode) ||
        !operators.hasItem(node.text) ||
        (index !== nodes.count() - 1 && !is(nodes.at(index + 1), $OperatorNode))
      ) {
        return nothing;
      }

      const value = nodes.at2(index - 1);

      if (!value.isExpression) {
        return nothing;
      }

      return {node: postfixNode(analyzer, value, node), index: index - 1};
    });
  };
}
