import {
  $ElseStatementNode,
  $IfStatementNode,
  newConditionStatementNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseConditionStatementNode(): NodeCollapseFn<StatementNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<StatementNode> => {
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
