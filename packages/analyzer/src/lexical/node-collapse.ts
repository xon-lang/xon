import {collapseInvokeNode, collapseMemberNode, Node2, NodeCollapseFn} from '#analyzer';
import {ArrayData, Integer, newArrayData} from '#common';

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
