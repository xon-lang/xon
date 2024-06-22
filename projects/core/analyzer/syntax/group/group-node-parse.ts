import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {
  ARRAY_CLOSE,
  ARRAY_OPEN,
  GROUP_CLOSE,
  OBJECT_CLOSE,
  OBJECT_OPEN,
} from '../../lexical/lexical-analyzer-config';
import {CloseNode} from '../../lexical/node/close/close-node';
import {CommaNode} from '../../lexical/node/comma/comma-node';
import {OpenNode} from '../../lexical/node/open/open-node';
import {syntaxParse} from '../../syntax-analyzer';
import {SyntaxParserConfig} from '../../syntax-analyzer-config';
import {SyntaxContext} from '../../syntax-context';
import {$Node, is} from '../node';
import {$Group, Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(context: SyntaxContext, openNode: OpenNode): Group {
  if (openNode.text === ARRAY_OPEN) {
    return groupNodeParseInner(context, $Node.ARRAY, openNode, ARRAY_CLOSE);
  }

  if (openNode.text === OBJECT_OPEN) {
    return groupNodeParseInner(context, $Node.OBJECT, openNode, OBJECT_CLOSE);
  }

  return groupNodeParseInner(context, $Node.GROUP, openNode, GROUP_CLOSE);
}

function groupNodeParseInner(
  context: SyntaxContext,
  $: $Group,
  openNode: OpenNode,
  closeText: String2,
): Group {
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

  while (context.lexer.cursor.position.index < context.resource.data.length) {
    const {syntaxContext: itemContext} = syntaxParse(
      context.resource,
      context.lexer.cursor.position,
      context.issueManager,
      context.formatterManager,
      (node) =>
        is<CommaNode>(node, $Node.COMMA) || (is<CloseNode>(node, $Node.CLOSE) && node.text === closeText),
      config,
      context.lexer,
    );

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

      return groupNode(context, $, openNode, items, itemContext.breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(context, $, openNode, items, nothing);
}
