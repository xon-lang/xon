import {
  $IdNode,
  $OperatorNode,
  ASSIGN,
  assignmentNode,
  Node,
  nodeFindMap,
  prefixNode,
  SyntaxAnalyzer,
  SyntaxParseFn,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function assignmentNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: ArrayData<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is(node, $OperatorNode) || !node.text.equals(ASSIGN)) {
        return nothing;
      }

      const id = nodes.at(index - 1);
      const value = nodes.at2(index + 1);

      if (!is(id, $IdNode) || !value.isExpression) {
        return nothing;
      }

      const assign = prefixNode(analyzer, node, value);

      return {node: assignmentNode(analyzer, id, assign), index: index - 1, deleteCount: 3};
    });
  };
}
