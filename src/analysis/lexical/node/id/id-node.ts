import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { KeywordNode, keywordNode } from '~/analysis/lexical/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { NodeType } from '~/analysis/node';
import '~/extensions';
import { Integer, String2 } from '~/lib/core';

export interface IdNode extends LexicalNode {
  $: NodeType.ID;
}

export function idNode(start: Integer, stop: Integer, text: String2): IdNode {
  return {
    $: NodeType.ID,
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

export function scanIdNode({ text, index }: LexicalAnalysis): IdNode | ModifierNode | KeywordNode | null {
  if (LETTERS.includes(text[index])) {
    const sliced = text.takeWhile((x) => DIGITS_LETTERS.includes(x), index);
    // todo should be after nl and/or spaces before id or operator
    if (MODIFIERS.includes(sliced)) {
      return modifierNode(index, index + sliced.length - 1, sliced);
    }
    if (KEYWORDS.includes(sliced)) {
      return keywordNode(index, index + sliced.length - 1, sliced);
    }
    return idNode(index, index + sliced.length - 1, sliced);
  }
  return null;
}
