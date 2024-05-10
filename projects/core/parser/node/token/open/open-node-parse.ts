import {Array2, Char, Integer, Nothing, nothing} from '../../../../lib/core';
import {ARRAY_CLOSE, ARRAY_OPEN, GROUP_CLOSE, GROUP_OPEN, OBJECT_CLOSE, OBJECT_OPEN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {syntaxParseUntil} from '../../../syntax-parser';
import {Group, groupNode} from '../../group/group-node';
import {ItemNode, itemNode} from '../../group/item-node';
import {$Node, is} from '../../node';
import {CloseNode} from '../close/close-node';
import {CommaNode} from '../comma/comma-node';
import {OpenNode, openNode} from './open-node';

export function openNodeParse(context: SyntaxContext, index: Integer): Group | Nothing {
  const char = context.resource.data[index];

  if (char !== GROUP_OPEN && char !== ARRAY_OPEN && char !== OBJECT_OPEN) {
    return nothing;
  }

  const text = context.resource.data[index];
  const range = context.getRange(text.length, false);
  const node = openNode(range, text);

  context.position = range.stop;

  return groupNodeParse(context, node);
}

export const OPEN_CLOSE_PAIR: Record<Char, {closeText: Char; $: $Node.GROUP | $Node.ARRAY | $Node.OBJECT}> = {
  [GROUP_OPEN]: {
    closeText: GROUP_CLOSE,
    $: $Node.GROUP,
  },
  [ARRAY_OPEN]: {
    closeText: ARRAY_CLOSE,
    $: $Node.ARRAY,
  },
  [OBJECT_OPEN]: {
    closeText: OBJECT_CLOSE,
    $: $Node.OBJECT,
  },
};

export function groupNodeParse(context: SyntaxContext, open: OpenNode): Group {
  const items: Array2<ItemNode> = [];

  const {closeText, $} = OPEN_CLOSE_PAIR[open.text];

  while (context.position.index < context.resource.data.length) {
    const {syntaxContext: itemContext} = syntaxParseUntil(
      context.resource,
      context.position,
      (node) => is<CommaNode>(node, $Node.COMMA) || (is<CloseNode>(node, $Node.CLOSE) && node.text === closeText),
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

      return groupNode(context, $, open, items, itemContext.breakNode);
    }
  }

  return groupNode(context, $, open, items, nothing);
}
