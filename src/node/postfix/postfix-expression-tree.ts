import { Node } from '~/node/node';

export interface PostfixNode extends Node {
  operator: Node;
  expression: Node;
}
