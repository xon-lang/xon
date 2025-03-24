import {
  $IdNode,
  $TypeKeywordNode,
  collapseNodes,
  DeclarationStatementNode,
  extractDeclarationInfo,
  newDeclarationStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseDeclarationStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): DeclarationStatementNode | Nothing {
  const firstNode = nodes.first();
  const keyword = is(firstNode, $TypeKeywordNode()) ? firstNode : nothing;

  if (keyword) {
    nodes = nodes.slice(1);
  }

  nodes = collapseNodes(nodes);
  const {target, parameters, annotation, assignment} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (!annotation && !assignment && !keyword)) {
    return nothing;
  }

  return newDeclarationStatementNode(
    indent,
    keyword,
    target,
    parameters,
    annotation,
    assignment,
    nodes.slice(1),
  );
}
