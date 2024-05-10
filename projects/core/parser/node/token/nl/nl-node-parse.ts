import {Integer, Nothing, nothing} from '../../../../lib/core';
import {NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {NlNode, nlNode} from './nl-node';

export function nlNodeParse(context: SyntaxContext, index: Integer): NlNode | Nothing {
  if (context.resource.data[index] !== NL) {
    return nothing;
  }

  const text = context.resource.data.takeWhile((x) => x === NL || x === SPACE, index);
  const range = context.getRange(text.length, true);

  return nlNode(range, text);
}
