import { String2 } from '~/lib/core';
import { Node } from '../node';

export interface LexicalNode extends Node {
  text: String2;
}
