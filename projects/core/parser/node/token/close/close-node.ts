import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CloseNode extends TokenNode {
  $: $Node.CLOSE;
}

export function closeNode(range: TextResourceRange, text: String2): CloseNode {
  return tokenNode($Node.CLOSE, {range, text});
}

export function closeTokenParse(context: SyntaxContext): CloseNode | Nothing {
  const {resource, position} = context;

  const char = resource.data[position.index];

  if (char !== GROUP_CLOSE && char !== ARRAY_CLOSE && char !== OBJECT_CLOSE) {
    return nothing;
  }

  const text = resource.data[position.index];
  const range = context.getRange(1, false);

  return closeNode(range, text);
}
