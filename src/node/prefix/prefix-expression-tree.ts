import { Node } from '~/node/node';

export interface PrefixNode extends Node {
  operator: Node;
  expression: Node;
}
