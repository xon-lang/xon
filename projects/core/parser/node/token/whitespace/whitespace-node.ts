import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: TextResourceRange, text: String2): WhitespaceNode {
  return tokenNode($Node.WHITESPACE, {range, text});
}

export function whitespaceTokenParse(context: SyntaxContext): WhitespaceNode | Nothing {
  const {resource: source, position} = context;
  const text = source.data.takeWhile((x) => x === SPACE, position.index);

  if (text.length === 0) {
    return nothing;
  }

  const range = context.getRange(text.length, false);

  return whitespaceNode(range, text);
}
