import {Nothing, String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface UnknownNode extends TokenNode {
  $: $Node.UNKNOWN;
}

export function unknownNode(range: TextResourceRange, text: String2): UnknownNode {
  return tokenNode($Node.UNKNOWN, {range, text});
}

export function unknownNodeParse(context: SyntaxContext): UnknownNode | Nothing {
  const text = context.resource.data[context.position.index];
  const range = context.getRange(1, false);

  return unknownNode(range, text);
}
