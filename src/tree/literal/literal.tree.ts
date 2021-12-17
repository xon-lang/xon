import { LiteralContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export abstract class LiteralTree extends Node {
  abstract ctx: LiteralContext;
  abstract value: string | number | RegExp;
}
