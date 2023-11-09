import { Integer, String2 } from '~/lib/core';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
  start: Integer;
  stop: Integer;
}

export interface TokenNode extends Node {
  text: String2;
}

export interface NonHiddenLexicalNode extends TokenNode {
  hidden: TokenNode[];
}
