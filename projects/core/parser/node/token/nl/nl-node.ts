import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface NlNode extends TokenNode {
  $: $Node.NL;
}

export function nlNode(range: TextResourceRange, text: String2): NlNode {
  return tokenNode($Node.NL, {range, text});
}

export function nlTokenParse(context: SyntaxContext): NlNode | Nothing {
  const index = context.position.index;
  const data = context.resource.data;

  if (data[index] !== NL) {
    return nothing;
  }

  const textWithIndents = data.takeWhile((x) => x === NL || x === SPACE, index);
  const lastNLIndex = textWithIndents.lastIndexOf(NL);

  const text = textWithIndents.slice(0, lastNLIndex + 1);
  const range = context.getRange(text.length, true);

  return nlNode(range, text);
}
