import { ExtensionTypeMemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class ExtensionTypeMemberTree extends BaseTree {
  public name: string;
  public abstract ctx?: ExtensionTypeMemberContext;
}
