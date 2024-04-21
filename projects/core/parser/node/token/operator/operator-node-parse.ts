import {Nothing, nothing} from '../../../../lib/core';
import {OPERATORS} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {idNodeParse} from '../id/id-node-parse';
import {TokenNode} from '../token-node';
import {operatorNode} from './operator-node';

export function operatorNodeParse(context: SyntaxContext): TokenNode | Nothing {
  const {resource, position} = context;

  const text = OPERATORS.findLast((x) => x === resource.data.slice(position.index, position.index + x.length));

  if (!text) {
    return nothing;
  }

  const id = idNodeParse(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length, false);

  return operatorNode(range, text);
}
