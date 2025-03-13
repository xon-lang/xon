import {
  $IdNode,
  collapseNodes,
  extractDeclarationInfo,
  newVariableValueDeclarationNode,
  Node,
  StatementNode,
  ValueDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseValueDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
  parent?: StatementNode | Nothing,
): ValueDeclarationNode | Nothing {
  nodes = collapseNodes(nodes);
  const firstNode = nodes.first();
  const {target, type, assign} = extractDeclarationInfo(firstNode);

  if (!is(target, $IdNode()) || (!type && !assign)) {
    return nothing;
  }

  return newVariableValueDeclarationNode(indent, target, type, assign, nodes.slice(1));
}
