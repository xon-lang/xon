import {
  $AngleGroupNode,
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  extractDeclarationInfo,
  newTypeDeclarationNode,
  Node,
  TypeDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseTypeDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): TypeDeclarationNode | Nothing {
  const keyword = nodes.first();

  if (!is(keyword, $TypeKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const {target, parameters, type, assign} = extractDeclarationInfo(nodes.first());

  if (assign || !is(target, $IdNode()) || (parameters && !is(parameters, $AngleGroupNode()))) {
    return nothing;
  }

  return newTypeDeclarationNode(indent, keyword, target, parameters, type, nodes);
}
