import { Node } from '../node';

export interface LiteralNode extends Node {
  value: string | number | RegExp;
}
