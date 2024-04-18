import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Array2, Nothing, nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {ARRAY_OPEN, COMMA, GROUP_OPEN, OBJECT_OPEN, OPEN_CLOSE_PAIR} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {syntaxParseUntil} from '../../../syntax-parser';
import {$Node, Node, is} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode, openNodeParse} from '../../token/open/open-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {ArrayNode, arrayNode} from '../array/array-node';
import {ItemNode, itemNode} from '../item/item-node';
import {ObjectNode, objectNode} from '../object/object-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function groupNode(
  context: SyntaxContext,
  open: OpenNode,
  close: CloseNode | Nothing,
  items: Array2<ItemNode>,
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
  const open = openNodeParse(context);

  if (!is<OpenNode>(open, $Node.OPEN)) {
    return nothing;
  }

  context.position.column = open.range.stop.column;
  context.position.index = open.range.stop.index;

  const items: Array2<ItemNode> = [];

  while (context.position.index < context.resource.data.length) {
    // todo use this cycle to group syntax by comma in the main parseSyntax function
    const {syntaxContext: itemContext} = syntaxParseUntil(
      context.resource,
      context.position,
      (node) =>
        (is<OperatorNode>(node, $Node.OPERATOR) && node.text === COMMA) ||
        (is<CloseNode>(node, $Node.CLOSE) && node.text === OPEN_CLOSE_PAIR[open.text]),
    );

    context.position = itemContext.position;

    if (is<OperatorNode>(itemContext.breakNode, $Node.OPERATOR)) {
      const item = itemNode(context, itemContext.statements, itemContext.breakNode);
      items.push(item);

      continue;
    }

    if (is<CloseNode>(itemContext.breakNode, $Node.CLOSE)) {
      if (itemContext.statements.length > 1 || itemContext.nodes.length > 0) {
        const item = itemNode(context, itemContext.statements, nothing);
        items.push(item);
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
  nodes: Array2<ItemNode>,
): Group | Nothing {
  if (open.text === GROUP_OPEN) {
    return groupNode(context, open, close, nodes);
  }

  if (open.text === OBJECT_OPEN) {
    return objectNode(open, close, nodes);
  }

  if (open.text === ARRAY_OPEN) {
    return arrayNode(open, close, nodes);
  }

  context.issueManager.addError(open.range, ISSUE_MESSAGE.notImplemented());

  return nothing;
}

export function isGroupNode(node: Node): node is Group {
  return is<GroupNode>(node, $Node.GROUP) || is<ArrayNode>(node, $Node.ARRAY) || is<ObjectNode>(node, $Node.OBJECT);
}
