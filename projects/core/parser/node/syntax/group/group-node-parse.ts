import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Array2, Integer, Nothing, nothing} from '../../../../lib/core';
import {ARRAY_OPEN, COMMA, GROUP_OPEN, OBJECT_OPEN, OPEN_CLOSE_PAIR} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {syntaxParseUntil} from '../../../syntax-parser';
import {$Node, is} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {openNodeParse} from '../../token/open/open-node-parse';
import {OperatorNode} from '../../token/operator/operator-node';
import {arrayNode} from '../array/array-node';
import {ItemNode, itemNode} from '../item/item-node';
import {objectNode} from '../object/object-node';
import {Group, groupNode} from './group-node';

export function groupNodeParse(context: SyntaxContext, index: Integer): Group | Nothing {
  const open = openNodeParse(context, index);

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

export function createGroupNode(
  context: SyntaxContext,
  open: OpenNode,
  close: CloseNode | Nothing,
  nodes: Array2<ItemNode>,
): Group | Nothing {
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

  return nothing;
}
