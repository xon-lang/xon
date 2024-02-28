import {Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {JOINING, NL, SPACE} from '../../../syntax-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface JoiningNode extends TokenNode {
  $: $Node.JOINING;
}

export function joiningNode(range: SourceRange, text: String2): JoiningNode {
  return tokenNode($Node.JOINING, range, text);
}

export function scanJoiningNode(context: SyntaxContext): JoiningNode | Nothing {
  const {source, position} = context;

  if (source.text[position.index] !== JOINING) {
    return nothing;
  }

  let text = JOINING + source.text.takeWhile((x) => x === SPACE, position.index + 1);

  if (source.text[position.index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRange(text.length, true);

  return joiningNode(range, text);
}
