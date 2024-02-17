import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { CR_CODE, JOINING_CODE, LF_CODE, SPACE_CODE, TAB_CODE } from '../../syntax-config';
import { SyntaxContext } from '../../syntax-context';
import { $Node, TokenNode } from '../node';

export interface JoiningNode extends TokenNode {
  $: $Node.JOINING;
}

export function joiningNode(range: SourceRange, text: String2): JoiningNode {
  return {
    $: $Node.JOINING,
    range,
    text,
  };
}

export function scanJoiningNode(context: SyntaxContext): JoiningNode | null {
  if (context.source.characters[context.position.index] !== JOINING_CODE) {
    return null;
  }

  let nextIndex = context.position.index + 1;

  for (; nextIndex < context.source.text.length; nextIndex++) {
    const nextCode = context.source.characters[nextIndex];

    if (nextCode === SPACE_CODE || nextCode === TAB_CODE) {
      continue;
    }

    if (context.source.characters[nextIndex] === LF_CODE) {
      nextIndex += 1;
    } else if (context.source.characters[nextIndex] === CR_CODE) {
      nextIndex += 1;

      if (context.source.characters[nextIndex + 1] === LF_CODE) {
        nextIndex += 1;
      }
    }

    break;
  }

  const text = context.source.text.slice(context.position.index, nextIndex);
  const range = context.getRange(text.length);

  return joiningNode(range, text);
}
