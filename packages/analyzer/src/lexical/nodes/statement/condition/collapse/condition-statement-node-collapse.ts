import {
  $ElseStatementNode,
  $IfStatementNode,
  newConditionStatementNode,
  NodeCollapseResult,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function collapseConditionStatementNode(
  statements: ArrayData<StatementNode2>,
  startIndex?: Integer | Nothing,
): NodeCollapseResult<StatementNode2> {
  return statements.firstMap((ifStatementNode, index) => {
    if (!is(ifStatementNode, $IfStatementNode)) {
      return nothing;
    }

    const nextNode = statements.at(index + 1);
    const elseStatementNode = is(nextNode, $ElseStatementNode) ? nextNode : nothing;

    return {node: newConditionStatementNode(ifStatementNode, elseStatementNode), index};
  }, startIndex);
}
