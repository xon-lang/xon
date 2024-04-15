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

export function joiningTokenParse(context: SyntaxContext): JoiningNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== JOINING) {
    return nothing;
  }

  let text = JOINING + resource.data.takeWhile((x) => x === SPACE, position.index + JOINING.length);

  if (resource.data[position.index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRange(text.length, true);

  return joiningNode(range, text);
}
