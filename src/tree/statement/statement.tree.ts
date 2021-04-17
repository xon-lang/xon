import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class StatementTree extends BaseTree {
  abstract ctx?: StatementContext;

  public toString(): string {
    throw new Error(`ToString not implemented for "${this.constructor.name}"`);
  }
}
