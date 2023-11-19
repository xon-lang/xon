import { String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';
import { ParserContext } from '~/parser/parser-context';

export interface JoiningNode extends TokenNode {
  $: NodeType.JOINING;
}

export function joiningNode(text: String2): Partial<JoiningNode> {
  return {
    $: NodeType.JOINING,
    text,
  };
}

const JOINING = '\\';
const CR = '\r';
const LF = '\n';
const WHITESPACE = ' \t';

export function scanJoiningNode({ text, index }: ParserContext): Partial<JoiningNode> | null {
  if (text[index] !== JOINING) {
    return null;
  }

  let nextIndex = index + 1;

  for (; nextIndex < text.length; nextIndex++) {
    if (WHITESPACE.includes(text[nextIndex])) {
      continue;
    }

    if (text[nextIndex] === LF) {
      nextIndex += 1;
    } else if (text[nextIndex] === CR) {
      nextIndex += 1;

      if (text[nextIndex + 1] === LF) {
        nextIndex += 1;
      }
    }

    break;
  }

  return joiningNode(text.slice(index, nextIndex));
}
