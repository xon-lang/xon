import { String2 } from '~/lib/core';
import { Node } from './node';

export interface LexicalNode extends Node {
  text: String2;
}
export interface HiddenLexicalNode extends LexicalNode {}

export interface NonHiddenLexicalNode extends LexicalNode {
  hidden: HiddenLexicalNode[];
}
