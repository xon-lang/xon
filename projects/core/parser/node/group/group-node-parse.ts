import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {SyntaxContext} from '../../syntax-context';
import {syntaxParse} from '../../syntax-parser';
import {SyntaxParserConfig} from '../../syntax-parser-config';
import {$Node, is} from '../node';
import {CloseNode} from '../token/close/close-node';
import {CommaNode} from '../token/comma/comma-node';
import {openNode} from '../token/open/open-node';
import {$Group, Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(
  context: SyntaxContext,
  $: $Group,
  openText: String2,
  closeText: String2,
): Group {
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

  let itemIndex = 0;
  let commaNode: CommaNode | Nothing = nothing;

  while (context.position.index < context.resource.data.length) {
    const {syntaxContext: itemContext} = syntaxParse(
      context.resource,
      context.position,
      context.issueManager,
      context.formatterManager,
      (node) =>
        is<CommaNode>(node, $Node.COMMA) || (is<CloseNode>(node, $Node.CLOSE) && node.text === closeText),
      config,
    );

    context.position = itemContext.position;

    if (is<CommaNode>(itemContext.breakNode, $Node.COMMA)) {
      const item = itemNode(context, itemIndex, commaNode, itemContext.statements);
      items.push(item);
      commaNode = itemContext.breakNode;
    }

    if (is<CloseNode>(itemContext.breakNode, $Node.CLOSE)) {
      if (items.length > 0 || itemContext.statements.length > 0) {
        const item = itemNode(context, itemIndex, commaNode, itemContext.statements);
        items.push(item);
      }

      return groupNode(context, $, open, items, itemContext.breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(context, $, open, items, nothing);
}
