import { ClassTypeMemberContext } from '../../../../../grammar/xon-parser';
import { BaseTree } from '../../../../base.tree';

export abstract class ClassTypeMemberTree extends BaseTree {
  public name: string;
  public abstract ctx?: ClassTypeMemberContext;
}
