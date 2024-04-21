import {Nothing, nothing} from '../../../../lib/core';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CloseNode, closeNode} from './close-node';

export function closeNodeParse(context: SyntaxContext): CloseNode | Nothing {
  const {resource, position} = context;

  const char = resource.data[position.index];

  if (char !== GROUP_CLOSE && char !== ARRAY_CLOSE && char !== OBJECT_CLOSE) {
    return nothing;
  }

  const text = resource.data[position.index];
  const range = context.getRange(1, false);

  return closeNode(range, text);
}
