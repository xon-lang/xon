import {
  $DeclarationStatementNode,
  $IdNode,
  $TypeKeywordNode,
  AnalyzerContext,
  collapseNodes,
  DeclarationStatementNode,
  extractDeclarationInfo,
  GroupNode,
  newDeclarationStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, newText, nothing, Nothing} from '#core';
import {is} from '#typing';

export function parseDeclarationStatementNode(
  context: AnalyzerContext,
  indent: Integer,
  nodes: ArrayData<Node>,
): DeclarationStatementNode | Nothing {
  const firstNode = nodes.first();
  const keyword = is(firstNode, $TypeKeywordNode()) ? firstNode : nothing;

  if (keyword) {
    nodes = nodes.slice(1);
  }

  nodes = collapseNodes(context, nodes);
  const {target, group, annotation, assignment} = extractDeclarationInfo(nodes.first());

  if (!is(target, $IdNode()) || (!annotation && !assignment && !keyword)) {
    return nothing;
  }

  validateParameters(context, group);
  context.extraNodes.addLastItems(nodes.slice(1));

  return newDeclarationStatementNode(indent, keyword, target, group, annotation, assignment);
}

function validateParameters(context: AnalyzerContext, group: GroupNode | Nothing): void {
  if (!group) {
    return;
  }

  for (const item of group.items) {
    if (is(item.statement, $DeclarationStatementNode())) {
      continue;
    }

    if (item.statement || item.comma) {
      context.addError((item.statement ?? item.comma)!.range, newText('Wrong declaration node'));
    }
  }
}
