import {Array2, Integer, Nothing, String2, nothing} from '../../../../lib/core';
import {ARRAY_CLOSE, ARRAY_OPEN, GROUP_CLOSE, GROUP_OPEN, OBJECT_CLOSE, OBJECT_OPEN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {syntaxParseUntil} from '../../../syntax-parser';
import {$Group, Group, groupNode} from '../../group/group-node';
import {ItemNode, itemNode} from '../../group/item-node';
import {$Node, is} from '../../node';
import {CloseNode} from '../close/close-node';
import {CommaNode} from '../comma/comma-node';
import {openNode} from './open-node';

export function openNodeParse(context: SyntaxContext, index: Integer): Group | Nothing {
  const char = context.resource.data[index];

  if (char === GROUP_OPEN) {
    return groupNodeParse(context, $Node.GROUP, GROUP_OPEN, GROUP_CLOSE);
  }

  if (char === ARRAY_OPEN) {
    return groupNodeParse(context, $Node.ARRAY, ARRAY_OPEN, ARRAY_CLOSE);
  }

  if (char === OBJECT_OPEN) {
    return groupNodeParse(context, $Node.OBJECT, OBJECT_OPEN, OBJECT_CLOSE);
  }

  return nothing;
}

export function groupNodeParse(context: SyntaxContext, $: $Group, openText: String2, closeText: String2): Group {
  const range = context.getSymbolRange();
  const open = openNode(range, openText);

  context.position = range.stop;

  const items: Array2<ItemNode> = [];

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
      if (itemContext.statements.length > 0) {
        const item = itemNode(context, itemContext.statements, nothing);
        items.push(item);
      }

      return groupNode(context, $, open, items, itemContext.breakNode);
    }
  }

  return groupNode(context, $, open, items, nothing);
}
