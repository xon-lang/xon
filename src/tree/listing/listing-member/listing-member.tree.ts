import { ListingMemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class ListingMemberTree extends BaseTree {
  public abstract ctx?: ListingMemberContext;
}
