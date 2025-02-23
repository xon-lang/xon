import {
  $AngleGroupNode,
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  extractDeclarationInfo,
  newNominalTypeDeclarationNode,
  newTypeDeclarationNode,
  Node,
  TypeDeclarationNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseNominalTypeDeclarationNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): TypeDeclarationNode | Nothing {
  const keyword = nodes.first();

  if (!is(keyword, $TypeKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const {target, parameters, type, assign} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (parameters && !is(parameters, $AngleGroupNode())) || assign) {
    return newTypeDeclarationNode(indent, keyword, nodes);
  }

  return newNominalTypeDeclarationNode(indent, keyword, target, parameters, type, nodes);
}
