import { ParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  public type: TypeTree;

  public constructor(public ctx: ParameterContext) {
    super();

    this.name = ctx.ID().text;
    this.type = new TypeTree(ctx.type());
  }
}
