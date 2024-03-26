import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {JOINING, NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface JoiningNode extends TokenNode {
  $: $Node.JOINING;
}

export function joiningNode(range: TextResourceRange, text: String2): JoiningNode {
  return tokenNode($Node.JOINING, {range, text});
}

export function scanJoiningNode(context: SyntaxContext): JoiningNode | Nothing {
  const {resource: source, position} = context;

  if (source.data[position.index] !== JOINING) {
    return nothing;
  }

  let text = JOINING + source.data.takeWhile((x) => x === SPACE, position.index + 1);

  if (source.data[position.index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRange(text.length, true);

  return joiningNode(range, text);
}
