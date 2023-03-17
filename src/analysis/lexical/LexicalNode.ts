import { Integer, String2 } from '~/lib/core';
import { Node } from '../Node';

export interface LexicalNode extends Node {
  start: Integer;
  stop: Integer;
  text: String2;
}
