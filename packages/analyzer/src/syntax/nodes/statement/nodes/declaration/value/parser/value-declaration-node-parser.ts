import {
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  extractDeclarationInfo,
  newValueDeclarationNode,
  Node,
  ValueDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseValueDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ValueDeclarationNode | Nothing {
  const firstNode = nodes.first();
  const keyword = is(firstNode, $TypeKeywordNode()) ? firstNode : nothing;

  if (keyword) {
    nodes = nodes.slice(1);
  }

  nodes = collapseNodes(nodes);
  const {target, type, assign} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (!type && !assign)) {
    return nothing;
  }

  // todo fix it
  const parameters = nothing;

  return newValueDeclarationNode(indent, keyword, target, parameters, type, assign, nodes.slice(1));
}
