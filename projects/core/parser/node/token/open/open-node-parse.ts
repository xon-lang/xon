import {Nothing, nothing} from '../../../../lib/core';
import {ARRAY_OPEN, GROUP_OPEN, OBJECT_OPEN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {OpenNode, openNode} from './open-node';

export function openNodeParse(context: SyntaxContext): Partial<OpenNode> | Nothing {
  const {resource, position} = context;

  const char = resource.data[position.index];

  if (char !== GROUP_OPEN && char !== ARRAY_OPEN && char !== OBJECT_OPEN) {
    return nothing;
  }

  const text = resource.data[position.index];
  const range = context.getRange(text.length, false);

  return openNode(range, text);
}
