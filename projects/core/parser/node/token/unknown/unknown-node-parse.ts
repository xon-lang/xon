import {SyntaxContext} from '../../../syntax-context';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(context: SyntaxContext): UnknownNode {
  const {resource, position} = context;

  const text = resource.data[position.index];
  const range = context.getRange(1, false);

  return unknownNode(range, text);
}
