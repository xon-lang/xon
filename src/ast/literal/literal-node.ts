import { LiteralContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export abstract class LiteralNode extends Node {
  abstract ctx: LiteralContext;
  abstract value: string | number | RegExp;
}
