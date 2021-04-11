import { MemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class MemberTree extends BaseTree {
  public ctx?: MemberContext;

  public name: string;
}
