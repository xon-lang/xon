import {Array2, String2, nothing} from '../../../lib/core';
import {SyntaxContext} from '../../syntax-context';
import {syntaxParse} from '../../syntax-parser';
import {SyntaxParserConfig} from '../../syntax-parser-config';
import {$Node, is} from '../node';
import {CloseNode} from '../token/close/close-node';
import {CommaNode} from '../token/comma/comma-node';
import {openNode} from '../token/open/open-node';
import {$Group, Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(context: SyntaxContext, $: $Group, openText: String2, closeText: String2): Group {
  const range = context.getSymbolRange();
  const open = openNode(range, openText);

  context.position = range.stop;

  const items: Array2<ItemNode> = [];

  const config: SyntaxParserConfig = {
    ...context.config,
    formatting: {
      ...context.config.formatting,
      insertFinalNewline: false,
    },
  };

  while (context.position.index < context.resource.data.length) {
    const {syntaxContext: itemContext} = syntaxParse(
      context.resource,
      context.position,
      context.issueManager,
      context.formatterManager,
      (node) => is<CommaNode>(node, $Node.COMMA) || (is<CloseNode>(node, $Node.CLOSE) && node.text === closeText),
      config,
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