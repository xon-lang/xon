import {
  $ElseStatementNode,
  $IfStatementNode,
  newConditionStatementNode,
  NodeCollapseResult,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function collapseConditionStatementNode(
  nodes: ArrayData<StatementNode>,
  startIndex?: Integer | Nothing,
): NodeCollapseResult<StatementNode> {
  return nodes.firstMap((ifStatementNode, index) => {
    if (!is(ifStatementNode, $IfStatementNode)) {
      return nothing;
    }

    const nextNode = nodes.at(index + 1);
    const elseStatementNode = is(nextNode, $ElseStatementNode) ? nextNode : nothing;

    return {node: newConditionStatementNode(ifStatementNode, elseStatementNode), index};
  }, startIndex);
}
