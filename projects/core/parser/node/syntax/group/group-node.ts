import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Nothing, nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {ARRAY_NODE_OPEN, COMMA, GROUP_NODE_OPEN, OBJECT_NODE_OPEN, OPEN_CLOSE_PAIR} from '../../../parser-config';
import {parseSyntaxUntil} from '../../../syntax';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node, is} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode, scanOpenNode} from '../../token/open/open-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {ArrayNode, arrayNode} from '../array/array-node';
import {ObjectNode, objectNode} from '../object/object-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP;
  open: OpenNode;
  close: CloseNode | Nothing;
  // todo make items as Statement[][] or as body
  items: (Node | Nothing)[];
}

export function groupNode(
  context: SyntaxContext,
  open: OpenNode,
  close: CloseNode | Nothing,
  items: Node[],
): GroupNode {
  const node = syntaxNode($Node.GROUP, {open, items, close});

  validate(context, node);

  return node;
}

function validate(context: SyntaxContext, node: GroupNode): Nothing {
  if (!node.close) {
    context.issueManager.addError(
      node.open.range,
      ISSUE_MESSAGE.expectCloseToken(node.open.text, OPEN_CLOSE_PAIR[node.open.text]),
    );
  }
}

export function scanGroupNode(context: SyntaxContext): Group | Nothing {
  const open = scanOpenNode(context);

  if (!is<OpenNode>(open, $Node.OPEN)) {
    return nothing;
  }

  const {source, position} = context;

  position.column = open.range.stop.column;
  position.index = open.range.stop.index;

  const items: Node[] = [];

  while (position.index < source.text.length) {
    // todo remove from here or refactor
    const {syntaxContext: itemContext} = parseSyntaxUntil(
      source,
      position,
      (node) =>
        (is<OperatorNode>(node, $Node.OPERATOR) && node.text === COMMA) ||
        (is<CloseNode>(node, $Node.CLOSE) && node.text === OPEN_CLOSE_PAIR[open.text]),
    );

    context.operators.push(...itemContext.operators);
    context.position = itemContext.position;

    if (is<OperatorNode>(itemContext.breakNode, $Node.OPERATOR)) {
      // todo create ItemNode and save comma in it
      // context.hiddenNodes.push(itemContext.breakNode);
      items.push(itemContext.statements[0]?.item ?? nothing);

      continue;
    }

    // todo add hidden nodes for close token
    if (is<CloseNode>(itemContext.breakNode, $Node.CLOSE)) {
      if (itemContext.nodes.length > 0 || items.length > 0) {
        items.push(itemContext.statements[0]?.item ?? nothing);
      }

      return createGroupNode(context, open, itemContext.breakNode, items);
    }
  }

  return createGroupNode(context, open, nothing, items);
}

function createGroupNode(
  context: SyntaxContext,
  open: OpenNode,
  close: CloseNode | Nothing,
  nodes: Node[],
): Group | Nothing {
  if (open.text === GROUP_NODE_OPEN) {
    return groupNode(context, open, close, nodes);
  }

  if (open.text === OBJECT_NODE_OPEN) {
    return objectNode(open, close, nodes);
  }

  if (open.text === ARRAY_NODE_OPEN) {
    return arrayNode(open, close, nodes);
  }

  context.issueManager.addError(open.range, ISSUE_MESSAGE.notImplemented());

  // todo remove it
  return nothing;
}

export function isGroupNode(node: Node): node is Group {
  return is<GroupNode>(node, $Node.GROUP) || is<ArrayNode>(node, $Node.ARRAY) || is<ObjectNode>(node, $Node.OBJECT);
}
