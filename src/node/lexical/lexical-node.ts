import { Integer, String2 } from '~/lib/core';
import { Node } from '../node';

export interface LexicalNode extends Node {
  start: Integer;
  stop: Integer;
  text: String2;
}

export interface HiddenLexicalNode extends LexicalNode {}

export interface NonHiddenLexicalNode extends LexicalNode {
  hidden: HiddenLexicalNode[];
}

export interface SyntacticNode extends Node {
  start: Integer;
  stop: Integer;
}
