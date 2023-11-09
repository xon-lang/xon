import '~/extensions';
import { Integer, String2 } from '~/lib/core';
import { KeywordNode, keywordNode } from '~/parser/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/parser/node/modifier/modifier-node';
import { LexicalAnalysis } from '~/parser/parser';
import { NonHiddenLexicalNode } from '../node';
import { NodeType } from '../node-type';

export interface IdNode extends NonHiddenLexicalNode {
  $: NodeType.ID;
}

export function idNode(start: Integer, stop: Integer, text: String2): IdNode {
  return {
    $: NodeType.ID,
    hidden: [],
    start,
    stop,
    text,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;
const MODIFIERS = ['prefix', 'postfix', 'infix'];
const KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'export', 'import', 'return'];

export function scanIdNode({
  text,
  index,
  lastStatementNodes,
}: LexicalAnalysis): IdNode | ModifierNode | KeywordNode | null {
  if (!LETTERS.includes(text[index])) return null;
  const sliced = text.takeWhile((x) => DIGITS_LETTERS.includes(x), index);

  if (lastStatementNodes.length === 0 && MODIFIERS.includes(sliced)) {
    return modifierNode(index, index + sliced.length - 1, sliced);
  }

  if (KEYWORDS.includes(sliced)) {
    return keywordNode(index, index + sliced.length - 1, sliced);
  }

  return idNode(index, index + sliced.length - 1, sliced);
}
