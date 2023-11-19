import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

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

export function scanJoiningNode({ source, index }: ParserContext): Partial<JoiningNode> | null {
  if (source.text[index] !== JOINING) {
    return null;
  }

  let nextIndex = index + 1;

  for (; nextIndex < source.text.length; nextIndex++) {
    if (WHITESPACE.includes(source.text[nextIndex])) {
      continue;
    }

    if (source.text[nextIndex] === LF) {
      nextIndex += 1;
    } else if (source.text[nextIndex] === CR) {
      nextIndex += 1;

      if (source.text[nextIndex + 1] === LF) {
        nextIndex += 1;
      }
    }

    break;
  }

  return joiningNode(source.text.slice(index, nextIndex));
}
