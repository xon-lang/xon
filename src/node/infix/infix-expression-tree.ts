import { Node } from '~/node/node';

export interface InfixNode extends Node {
  operator: Node;
  left: Node;
  right: Node;
}
