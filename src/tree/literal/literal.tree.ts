import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  abstract ctx?: LiteralContext;

  abstract value: unknown;
}
