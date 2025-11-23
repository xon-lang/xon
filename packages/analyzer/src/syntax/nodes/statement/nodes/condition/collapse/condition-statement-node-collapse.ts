import {
  $ElseStatementNode,
  $IfStatementNode,
  newConditionStatementNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Integer, is, nothing} from '#core';

export function collapseConditionStatementNode(): NodeCollapseFn<SyntaxNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<SyntaxNode> => {
      return nodes.firstMap((ifStatementNode, index) => {
        if (!is(ifStatementNode, $IfStatementNode())) {
          return nothing;
        }

        const nextNode = nodes.at(index + 1);
        const elseStatementNode = is(nextNode, $ElseStatementNode()) ? nextNode : nothing;

        return {
          index,
          deleteCount: elseStatementNode ? 2 : 1,
          node: newConditionStatementNode(ifStatementNode, elseStatementNode),
        };
      }, startIndex);
    },
  };
}
