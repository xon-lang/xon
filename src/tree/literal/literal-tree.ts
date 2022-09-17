import { Tree } from '../tree';
import { LiteralType } from './literal-type';

export abstract class LiteralTree extends Tree {
  value: LiteralType;
}
