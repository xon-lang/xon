import { Integer, String2 } from '~/lib/core';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
}

export interface LexicalNode extends Node {
  start: Integer;
  stop: Integer;
  text: String2;
}

export interface SyntacticNode extends Node {
  start: Integer;
  stop: Integer;
}

export interface NonHiddenLexicalNode extends LexicalNode {
  hidden: HiddenLexicalNode[];
}

export interface HiddenLexicalNode extends LexicalNode {}
