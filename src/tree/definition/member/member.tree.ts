import { MemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class MemberTree extends BaseTree {
  public name: string;

  abstract ctx?: MemberContext;

  public toString(): string {
    throw new Error(`ToString not implemented for "${this.constructor.name}"`);
  }
}
