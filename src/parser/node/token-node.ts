import { String2 } from '../../lib/core';
import { Node } from './node';

export interface TokenNode extends Node {
  // todo remove it and get from range field
  text: String2;
}
