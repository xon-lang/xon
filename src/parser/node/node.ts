import { Integer, String2 } from '~/lib/core';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
  start: Integer;
  stop: Integer;
  hidden: TokenNode[];
}

export interface TokenNode extends Node {
  text: String2;
}
