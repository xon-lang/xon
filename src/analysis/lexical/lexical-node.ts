import { Integer, String2 } from '~/lib/core';
import { Node } from '../node';

export interface LexicalNode extends Node {
  start: Integer;
  stop: Integer;
  text: String2;
}
