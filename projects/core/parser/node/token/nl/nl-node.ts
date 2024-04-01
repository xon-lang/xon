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
  const {resource: source, position} = context;

  if (source.data[position.index] !== NL) {
    return nothing;
  }

  const textWithIndents = source.data.takeWhile((x) => x === NL || x === SPACE, position.index);
  const lastNLIndex = textWithIndents.lastIndexOf(NL);
  const text = textWithIndents.slice(0, lastNLIndex + 1);
  const range = context.getRange(text.length, true);

  return nlNode(range, text);
}
