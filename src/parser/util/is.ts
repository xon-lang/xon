import { Nothing } from '../../lib/core';
import { $Node, Node } from '../node/node';

export function is<T extends Node = Node>(node: { $?: $Node } | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}
