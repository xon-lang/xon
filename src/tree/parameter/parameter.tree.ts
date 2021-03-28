import { ParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  public type: TypeTree;

  public constructor(public ctx: ParameterContext) {
    super();

    this.name = ctx.ID().text;
    this.type = getTypeTree(ctx.type());
  }
}
