import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {CloseNode, closeNode} from './close-node';

export function closeNodeParse(context: SyntaxContext, index: Integer): CloseNode | Nothing {
  // todo create separate tokens for each lexemes
  const closesLexemes = [GROUP_CLOSE, ARRAY_CLOSE, OBJECT_CLOSE];

  if (!closesLexemes.some((x) => context.checkLexemeAtIndex(x, index))) {
    return nothing;
  }

  const text = context.resource.data[index];
  const range = context.getSymbolRange();

  return closeNode(range, text);
}
