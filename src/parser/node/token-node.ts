import { String2 } from '../../lib/core';
import { Node } from './node';

export interface TokenNode extends Node {
  text: String2;
}
