import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {DOCUMENTATION_OPEN} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {syntaxParse} from '../../../syntax-parser';
import {SyntaxParserConfig} from '../../../syntax-parser-config';
import {groupNode} from '../../../syntax/group/group-node';
import {ItemNode, itemNode} from '../../../syntax/group/item-node';
import {$Node, is} from '../../../syntax/node';
import {CloseNode} from '../../../syntax/token/close/close-node';
import {CommaNode} from '../../../syntax/token/comma/comma-node';
import {openNode} from '../../../syntax/token/open/open-node';
import {DocumentationNode} from './documentation-node';

export function documentationNodeParse(context: SyntaxContext): DocumentationNode {
  const range = context.getRange(DOCUMENTATION_OPEN.length);
  const open = openNode(range, DOCUMENTATION_OPEN);

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
