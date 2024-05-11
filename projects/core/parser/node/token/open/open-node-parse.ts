import {Integer, Nothing, nothing} from '../../../../lib/core';
import {ARRAY_CLOSE, ARRAY_OPEN, GROUP_CLOSE, GROUP_OPEN, OBJECT_CLOSE, OBJECT_OPEN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {Group} from '../../group/group-node';
import {groupNodeParse} from '../../group/group-node-parse';
import {$Node} from '../../node';

export function openNodeParse(context: SyntaxContext, index: Integer): Group | Nothing {
  const char = context.resource.data[index];

  if (char === GROUP_OPEN) {
    return groupNodeParse(context, $Node.GROUP, GROUP_OPEN, GROUP_CLOSE);
  }

  if (char === ARRAY_OPEN) {
    return groupNodeParse(context, $Node.ARRAY, ARRAY_OPEN, ARRAY_CLOSE);
  }

  if (char === OBJECT_OPEN) {
    return groupNodeParse(context, $Node.OBJECT, OBJECT_OPEN, OBJECT_CLOSE);
  }

  return nothing;
}
