import {
  $IdNode,
  collapseNodes,
  extractDeclarationInfo,
  newValueDeclarationNode,
  Node,
  ValueDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseParameterDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ValueDeclarationNode | Nothing {
  nodes = collapseNodes(nodes);
  const firstNode = nodes.first();
  const {target, type, assign} = extractDeclarationInfo(firstNode);

  if (!is(target, $IdNode()) || (!type && !assign)) {
    return nothing;
  }

  return newValueDeclarationNode(indent, target, type, assign, nodes.slice(1));
}
