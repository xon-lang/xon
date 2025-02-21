import {
  $ConstKeywordNode,
  collapseNodes,
  ConstStatementNode,
  extractDeclarationInfo,
  newConstStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseConstStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ConstStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ConstKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const {target, type, assign} = extractDeclarationInfo(nodes.first());

  return newConstStatementNode(indent, keywordNode, target, type, assign, nodes);
}
