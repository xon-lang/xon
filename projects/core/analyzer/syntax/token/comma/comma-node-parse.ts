import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {COMMA} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(context: SyntaxContext, index: Integer): CommaNode | Nothing {
  if (context.resource.data[index] !== COMMA) {
    return nothing;
  }

  const text = COMMA;
  const range = context.getSymbolRange();

  return commaNode(range, text);
}
