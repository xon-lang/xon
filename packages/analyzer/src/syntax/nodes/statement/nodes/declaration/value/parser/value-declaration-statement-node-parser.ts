import {
  $IdNode,
  collapseNodes,
  extractDeclarationInfo,
  newValueDeclarationStatementNode,
  Node,
  ValueDeclarationStatementNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseValueDeclarationStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ValueDeclarationStatementNode | Nothing {
  nodes = collapseNodes(nodes);
  const firstNode = nodes.first();
  const {target, type, assign} = extractDeclarationInfo(firstNode);

  if (!is(target, $IdNode()) || (!type && !assign)) {
    return nothing;
  }

  return newValueDeclarationStatementNode(indent, target, type, assign, nodes.slice(1));
}
