import '~/extensions';
import { String2 } from '~/lib/core';
import { KeywordNode, keywordNode } from '~/parser/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/parser/node/modifier/modifier-node';
import { Parser } from '~/parser/parser';
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

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;
const MODIFIERS = ['model', 'const', 'var', 'prefix', 'postfix', 'infix'];
const KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'export', 'import', 'return'];

export function scanIdNode({
  index,
  text,
  lastStatementNodes,
}: Parser): Partial<IdNode | ModifierNode | KeywordNode> | null {
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
