import {
  $AngleCloseNode,
  $AngleGroupNode,
  $AngleOpenNode,
  $BraceCloseNode,
  $BraceGroupNode,
  $BraceOpenNode,
  $BracketCloseNode,
  $BracketGroupNode,
  $BracketOpenNode,
  $CommaNode,
  $GroupCloseNode,
  $ParenCloseNode,
  $ParenGroupNode,
  $ParenOpenNode,
  AnalyzerContext,
  GroupItemNode,
  GroupNode,
  GroupOpenNode,
  newGroupNode,
  newItemNode,
  parseGroupOpenNode,
  parseStatementsUntil,
} from '#analyzer';
import {newArrayData, Nothing, nothing} from '#common';
import {$Type, is} from '#typing';

export function parseGroupNode(context: AnalyzerContext): GroupNode | Nothing {
  const openNode = parseGroupOpenNode(context);

  if (is(openNode, $AngleOpenNode)) {
    return groupNodeParseInner(context, $AngleGroupNode, openNode, $AngleCloseNode);
  }

  if (is(openNode, $BraceOpenNode)) {
    return groupNodeParseInner(context, $BraceGroupNode, openNode, $BraceCloseNode);
  }

  if (is(openNode, $BracketOpenNode)) {
    return groupNodeParseInner(context, $BracketGroupNode, openNode, $BracketCloseNode);
  }

  if (is(openNode, $ParenOpenNode)) {
    return groupNodeParseInner(context, $ParenGroupNode, openNode, $ParenCloseNode);
  }

  return nothing;
}

function groupNodeParseInner(
  context: AnalyzerContext,
  $groupType: $Type,
  openNode: GroupOpenNode,
  $closeNodeType: $Type,
): GroupNode {
  const items = newArrayData<GroupItemNode>();

  while (true) {
    const {breakNode, statements} = parseStatementsUntil(
      context,
      (node) => is(node, $CommaNode) || is(node, $closeNodeType),
    );

    if (!breakNode) {
      return newGroupNode($groupType, openNode, items, nothing);
    }

    if (is(breakNode, $CommaNode)) {
      items.addLastItem(newItemNode(statements, breakNode));

      continue;
    }

    if (is(breakNode, $GroupCloseNode)) {
      if (!statements.isEmpty()) {
        items.addLastItem(newItemNode(statements, nothing));
      }

      return newGroupNode($groupType, openNode, items, breakNode);
    }
  }
}
