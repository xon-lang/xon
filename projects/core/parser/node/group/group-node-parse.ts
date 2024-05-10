import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Nothing, nothing} from '../../../lib/core';
import {ARRAY_OPEN, GROUP_OPEN, OBJECT_OPEN, OPEN_CLOSE_PAIR} from '../../parser-config';
import {SyntaxContext} from '../../syntax-context';
import {syntaxParseUntil} from '../../syntax-parser';
import {$Node, is} from '../node';
import {arrayNode} from '../syntax/array/array-node';
import {objectNode} from '../syntax/object/object-node';
import {CloseNode} from '../token/close/close-node';
import {CommaNode} from '../token/comma/comma-node';
import {OpenNode} from '../token/open/open-node';
import {OperatorNode} from '../token/operator/operator-node';
import {Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(context: SyntaxContext, open: OpenNode): Group {
  const items: Array2<ItemNode> = [];

  while (context.position.index < context.resource.data.length) {
    const {syntaxContext: itemContext} = syntaxParseUntil(
      context.resource,
      context.position,
      (node) =>
        is<CommaNode>(node, $Node.COMMA) ||
        (is<CloseNode>(node, $Node.CLOSE) && node.text === OPEN_CLOSE_PAIR[open.text]),
    );

    context.position = itemContext.position;

    if (is<CommaNode>(itemContext.breakNode, $Node.COMMA)) {
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

export function createGroupNode(
  context: SyntaxContext,
  open: OpenNode,
  close: CloseNode | Nothing,
  nodes: Array2<ItemNode>,
): Group {
  if (open.text === GROUP_OPEN) {
    return groupNode(context, open, nodes, close);
  }

  if (open.text === OBJECT_OPEN) {
    return objectNode(open, nodes, close);
  }

  if (open.text === ARRAY_OPEN) {
    return arrayNode(open, nodes, close);
  }

  context.issueManager.addError(open.range, ISSUE_MESSAGE.notImplemented());

  return groupNode(context, open, nodes, close);
}
