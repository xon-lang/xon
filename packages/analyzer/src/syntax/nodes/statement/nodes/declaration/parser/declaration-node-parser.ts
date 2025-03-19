import {
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  DeclarationNode,
  extractDeclarationInfo,
  newDeclarationNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseDeclarationNode(indent: Integer, nodes: ArrayData<Node>): DeclarationNode | Nothing {
  const firstNode = nodes.first();
  const keyword = is(firstNode, $TypeKeywordNode()) ? firstNode : nothing;

  if (keyword) {
    nodes = nodes.slice(1);
  }

  nodes = collapseNodes(nodes);
  const {target, type, value: assign} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (!type && !assign && !keyword)) {
    return nothing;
  }

  // todo fix it
  const parameters = nothing;

  return newDeclarationNode(indent, keyword, target, parameters, type, assign, nodes.slice(1));
}
