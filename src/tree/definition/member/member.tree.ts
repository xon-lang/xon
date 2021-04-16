import { MemberContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { ParameterTree } from '../../parameter/parameter.tree';
import { TypeTree } from '../../type/type.tree';

export abstract class MemberTree extends BaseTree {
  public name: string;

  public parameters: ParameterTree[];

  public returnType?: TypeTree;

  abstract ctx?: MemberContext;
}
