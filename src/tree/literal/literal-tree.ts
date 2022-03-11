import { Number, String } from '../../lib/core';
import { Tree } from '../tree';

export class LiteralTree extends Tree {
  value: String | Number | RegExp;
}
