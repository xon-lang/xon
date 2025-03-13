import {
  $IdNode,
  collapseNodes,
  extractDeclarationInfo,
  newParameterDeclarationNode,
  Node,
  ParameterDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseParameterDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ParameterDeclarationNode | Nothing {
  nodes = collapseNodes(nodes);
  const firstNode = nodes.first();
  const {target, type, assign} = extractDeclarationInfo(firstNode);

  if (!is(target, $IdNode()) || (!type && !assign)) {
    return nothing;
  }

  return newParameterDeclarationNode(indent, target, type, assign, nodes.slice(1));
}
