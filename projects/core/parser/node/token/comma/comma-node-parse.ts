import {Integer, Nothing, nothing} from '../../../../lib/core';
import {COMMA} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(context: SyntaxContext, index: Integer): CommaNode | Nothing {
  if (context.resource.data[index] !== COMMA) {
    return nothing;
  }

  const text = COMMA;
  const range = context.getRange(1, false);

  return commaNode(range, text);
}
