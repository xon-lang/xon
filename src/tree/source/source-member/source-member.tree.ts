import { SourceMemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class SourceMemberTree extends BaseTree {
  public abstract ctx?: SourceMemberContext;
}
