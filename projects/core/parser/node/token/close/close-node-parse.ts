import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CloseNode, closeNode} from './close-node';

export function closeNodeParse(context: SyntaxContext, index: Integer): CloseNode | Nothing {
  const char = context.resource.data[index];

  if (char !== GROUP_CLOSE && char !== ARRAY_CLOSE && char !== OBJECT_CLOSE) {
    return nothing;
  }

  const text = context.resource.data[index];
  const range = context.getSymbolRange();

  return closeNode(range, text);
}
