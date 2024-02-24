import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { JOINING, NL, SPACE, TAB } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface JoiningNode extends TokenNode {
  $: $Node.JOINING;
}

export function joiningNode(range: SourceRange, text: String2): JoiningNode {
  return tokenNode($Node.JOINING, range, text);
}

export function scanJoiningNode(context: SyntaxContext): JoiningNode | null {
  const { source, position } = context;

  if (source.text[position.index] !== JOINING) {
    return null;
  }

  let text = source.text.takeWhile((x) => x === JOINING || x === SPACE || x === TAB, position.index);

  if (text.length === 0) {
    return null;
  }

  if (source.text[position.index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRange(text.length);

  return joiningNode(range, text);
}
