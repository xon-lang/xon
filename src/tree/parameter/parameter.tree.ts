import { ParameterContext, ParametersContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  public type?: TypeTree;

  public metaType?: string;

  public constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.type = getTypeTree(ctx.type());
    this.metaType = ctx._meta?.text;
  }

  public static fromContext(ctx: ParametersContext): ParameterTree[] {
    return ctx?.parameter()?.map((x) => new ParameterTree(x)) || [];
  }
}
