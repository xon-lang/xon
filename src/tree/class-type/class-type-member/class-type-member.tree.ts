import { ClassTypeMemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';

export abstract class ClassTypeMemberTree extends BaseTree {
  public abstract ctx?: ClassTypeMemberContext;
}
