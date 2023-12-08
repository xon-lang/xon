import { Node } from '../../parser/node/node';
import { NodeType } from '../node/node-type';

export function is<T extends Node = Node>(node: { $?: NodeType } | null | undefined, nodeType: NodeType): node is T {
  return node?.$ === nodeType;
}
