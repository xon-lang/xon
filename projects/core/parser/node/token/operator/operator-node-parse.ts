import {Integer, Nothing, nothing} from '../../../../lib/core';
import {OPERATORS} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {idNodeParse} from '../id/id-node-parse';
import {TokenNode} from '../token-node';
import {operatorNode} from './operator-node';

export function operatorNodeParse(context: SyntaxContext, index: Integer): TokenNode | Nothing {
  const text = OPERATORS.findLast((x) => x === context.resource.data.slice(index, index + x.length));

  if (!text) {
    return nothing;
  }

  const id = idNodeParse(context, index);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length, false);

  return operatorNode(range, text);
}
