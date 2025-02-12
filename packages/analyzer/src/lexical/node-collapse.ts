import {
  collapseConditionStatementNode,
  collapseInvokeNode,
  collapseMemberNode,
  Node2,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Integer, newArrayData, Nothing} from '#common';

export type NodeCollapseFn<T extends Node2 = Node2> = (
  nodes: ArrayData<T>,
  startIndex: Integer,
) => NodeCollapseResult<T>;
export type NodeCollapseResult<T extends Node2 = Node2> = {index: Integer; node: T} | Nothing;

function nodeCollapses(): ArrayData<{min: Integer; collapse: NodeCollapseFn}> {
  return newArrayData([
    {min: 2, collapse: collapseInvokeNode},
    {min: 2, collapse: collapseMemberNode},
  ]);
}

export function collapseNodes(nodes: ArrayData<Node2>): ArrayData<Node2> {
  if (nodes.isEmpty()) {
    return nodes;
  }

  for (const {min, collapse} of nodeCollapses()) {
    if (nodes.count() < min) {
      continue;
    }

    let index = 0;

    while (true) {
      const result = collapse(nodes, index);

      if (!result) {
        break;
      }

      const deleteCount = result.node.children?.count() ?? 0;
      nodes = nodes.replaceItem(result.index, deleteCount, result.node);
      index = result.index + 1;

      if (index >= nodes.count() || nodes.count() < min) {
        break;
      }
    }
  }

  return nodes;
}

// todo try to join with 'nodeCollapses'
function statementCollapses(): ArrayData<{min: Integer; collapse: NodeCollapseFn<StatementNode2>}> {
  return newArrayData([{min: 1, collapse: collapseConditionStatementNode}]);
}

// todo try to join with 'collapseNodes'
export function collapseStatements(nodes: ArrayData<StatementNode2>): ArrayData<StatementNode2> {
  if (nodes.isEmpty()) {
    return nodes;
  }

  for (const {min, collapse} of statementCollapses()) {
    if (nodes.count() < min) {
      continue;
    }

    let index = 0;

    while (true) {
      const result = collapse(nodes, index);

      if (!result) {
        break;
      }

      const deleteCount = result.node.children?.count() ?? 0;
      nodes = nodes.replaceItem(result.index, deleteCount, result.node);
      index = result.index + 1;

      if (index >= nodes.count() || nodes.count() < min) {
        break;
      }
    }
  }

  return nodes;
}
