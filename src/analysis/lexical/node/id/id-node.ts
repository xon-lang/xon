import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { KeywordNode, keywordNode } from '~/analysis/lexical/node/keyword/keyword-node';
import { ModifierNode, modifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { NodeType } from '~/analysis/node';
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

export function scanIdNode(text: String2, index: Integer): IdNode | ModifierNode | KeywordNode | null {
  if (LETTERS.includes(text[index])) {
    // todo use takewhile
    let nextIndex = index;
    for (let i = index + 1; i < text.length; i++) {
      if (!DIGITS_LETTERS.includes(text[i])) {
        break;
      }
      nextIndex = i;
    }
    const sliced = text.slice(index, nextIndex + 1);
    if (MODIFIERS.includes(sliced)) {
      return modifierNode(index, nextIndex, sliced);
    }
    if (KEYWORDS.includes(sliced)) {
      return keywordNode(index, nextIndex, sliced);
    }
    return idNode(index, nextIndex, sliced);
  }
  return null;
}
