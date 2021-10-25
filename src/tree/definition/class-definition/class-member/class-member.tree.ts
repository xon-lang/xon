import { ClassMemberContext } from '../../../../grammar/xon-parser';
import { BaseTree } from '../../../base.tree';
import { IdToken } from '../../../id-token';

export abstract class ClassMemberTree extends BaseTree {
  public abstract ctx?: ClassMemberContext;
  public id: IdToken;
}
