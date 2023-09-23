import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import '~/extensions';
import { CloseNode } from '~/node/close/close-node';
import { CommaNode } from '~/node/comma/comma-node';
import { Node, NodeType } from '~/node/node';
import { OpenNode, scanOpenNode } from '~/node/open/open-node';
import { StatementNode, statementNode } from '~/node/statement/statement-node';

export interface GroupNode extends Node {
  $: NodeType.GROUP;
  open: OpenNode;
  close: CloseNode | null;
  items: ItemNode[];
}

export function groupNode(open: OpenNode, close: CloseNode | null, items: ItemNode[]): GroupNode {
  const lastStatement = items.lastOrNull()?.statements?.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.GROUP,
    start: open.start,
    stop: close?.stop ?? lastStatement?.stop ?? open.stop,
    open,
    close,
    items,
  };
}

export interface ItemNode extends Node {
  $: NodeType.ITEM;
  statements: StatementNode[];
  comma?: CommaNode;
}

export function itemNode(statements: StatementNode[], comma?: CommaNode): ItemNode {
  const firstStatement = statements.first().nodes.firstOrNull();
  const lastStatement = statements.last().nodes.lastOrNull();

  return {
    $: NodeType.ITEM,
    start: firstStatement?.start ?? 0,
    stop: lastStatement?.stop ?? 0,
    statements,
    comma,
  };
}

export function scanGroupNode(analysis: LexicalAnalysis): GroupNode | null {
  const open = scanOpenNode(analysis);

  if (!open || !is<OpenNode>(open, NodeType.OPEN)) {
    return null;
  }

  analysis.index = open.stop + 1;
  const items: ItemNode[] = [];

  while (analysis.index < analysis.text.length) {
    // fix close pair should be the same type (] - is invalid, () - is valid
    const body = analysis.body((node) => is(node, NodeType.COMMA) || is(node, NodeType.CLOSE));
    const breakNode = body.breakNode;

    if (is<CommaNode>(breakNode, NodeType.COMMA)) {
      items.push(itemNode(body.statements, breakNode));
      continue;
    }

    if (is<CloseNode>(breakNode, NodeType.CLOSE)) {
      // if (body.statements.length > 0 && body.statements[0].nodes.length > 0) {
      items.push(itemNode(body.statements));
      // }

      return groupNode(open, breakNode, items);
    }
  }

  if (items.length === 0) {
    items.push(itemNode([statementNode([])]));
  }

  return groupNode(open, null, items);
}
