import { Node } from '../../parser/node/node';
import { $Node } from '../node/node';

export function is<T extends Node = Node>(node: { $?: $Node } | null | undefined, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}
