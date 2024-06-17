import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {COMMA} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(context: SyntaxContext, index: Integer): CommaNode | Nothing {
  if (!context.checkLexemeAtIndex(COMMA, index)) {
    return nothing;
  }

  const text = COMMA;
  const range = context.getSymbolRange();

  return commaNode(range, text);
}
