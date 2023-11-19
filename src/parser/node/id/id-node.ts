import '~/extensions';
import { String2 } from '~/lib/core';
import { KeywordNode, keywordNode } from '~/parser/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/parser/node/modifier/modifier-node';
import { ParserContext } from '~/parser/parser-context';
import { DIGITS_LETTERS, KEYWORDS, LETTERS, MODIFIERS } from '~/parser/util/operators';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface IdNode extends TokenNode {
  $: NodeType.ID;
}

export function idNode(text: String2): Partial<IdNode> {
  return {
    $: NodeType.ID,
    text,
  };
}

export function scanIdNode(context: ParserContext): Partial<IdNode | ModifierNode | KeywordNode> | null {
  const { index, text } = context;
  const { lastStatementNodes } = context;

  if (!LETTERS.includes(text[index])) {
    return null;
  }

  const sliced = text.takeWhile((x) => DIGITS_LETTERS.includes(x), index);

  if (lastStatementNodes.length === 0 && MODIFIERS.includes(sliced)) {
    return modifierNode(sliced);
  }

  if (KEYWORDS.includes(sliced)) {
    return keywordNode(sliced);
  }

  return idNode(sliced);
}
