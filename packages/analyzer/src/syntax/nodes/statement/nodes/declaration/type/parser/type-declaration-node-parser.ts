import {
  $AngleGroupNode,
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  extractDeclarationInfo,
  newNominalTypeDeclarationNode,
  newStructuralTypeDeclarationNode,
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

  if (is(target, $IdNode()) && (!parameters || is(parameters, $AngleGroupNode()))) {
    if (!assign) {
      return newNominalTypeDeclarationNode(indent, keyword, target, parameters, type, nodes);
    }

    if (!type && assign) {
      return newStructuralTypeDeclarationNode(indent, keyword, target, parameters, assign, nodes);
    }
  }

  return nothing;
}
