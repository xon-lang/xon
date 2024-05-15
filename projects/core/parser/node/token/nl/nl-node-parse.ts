import {Integer, Nothing, nothing} from '../../../../lib/core';
import {NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {NlNode, nlNode} from './nl-node';

export function nlNodeParse(context: SyntaxContext, index: Integer): NlNode | Nothing {
  if (context.resource.data[index] !== NL) {
    return nothing;
  }

  const textWithIndents = context.resource.data.takeWhile((x) => x === NL || x === SPACE, index);
  const lastNlIndex = textWithIndents.lastIndexOf(NL);

  const text = textWithIndents.slice(0, lastNlIndex + 1);
  const range = context.getRangeWithNL(text.length);

  return nlNode(range, text);
}
