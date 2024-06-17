import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {NL, SPACE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {NlNode, nlNode} from './nl-node';

export function nlNodeParse(context: SyntaxContext, index: Integer): NlNode | Nothing {
  if (!context.checkLexemeAtIndex(NL, index)) {
    return nothing;
  }

  const textWithIndents = context.resource.data.takeWhile((x) => x === NL || x === SPACE, index);
  const lastNlIndex = textWithIndents.lastIndexOf(NL);

  const text = textWithIndents.slice(0, lastNlIndex + 1);
  const range = context.getRangeWithNL(text.length);

  return nlNode(range, text);
}
