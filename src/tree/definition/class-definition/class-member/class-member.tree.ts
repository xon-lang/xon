import { ClassMemberContext } from '../../../../grammar/xon-parser';
import { BaseTree } from '../../../base.tree';

export abstract class ClassMemberTree extends BaseTree {
  public abstract ctx?: ClassMemberContext;
}
