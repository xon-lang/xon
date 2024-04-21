import {Nothing, nothing} from '../../../../lib/core';
import {NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {NlNode, nlNode} from './nl-node';

export function nlNodeParse(context: SyntaxContext): NlNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== NL) {
    return nothing;
  }

  const textWithIndents = resource.data.takeWhile((x) => x === NL || x === SPACE, position.index);
  const lastNLIndex = textWithIndents.lastIndexOf(NL);

  const text = textWithIndents.slice(0, lastNLIndex + 1);
  const range = context.getRange(text.length, true);

  return nlNode(range, text);
}
