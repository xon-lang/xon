import {
  $AngleGroupNode,
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  extractDeclarationInfo,
  newStructuralTypeStatementNode,
  newTypeStatementNode,
  Node,
  TypeStatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseStructuralTypeStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): TypeStatementNode | Nothing {
  const keyword = nodes.first();

  if (!is(keyword, $TypeKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const {target, parameters, type, assign} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (parameters && !is(parameters, $AngleGroupNode())) || type || !assign) {
    return newTypeStatementNode(indent, keyword, nodes);
  }

  return newStructuralTypeStatementNode(indent, keyword, target, parameters, assign, nodes);
}
