import { ParameterContext } from '../../grammar/xon-parser';
import { ArgumentTree } from '../argument/argument.tree';
import { BaseTree } from '../base.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  public type: TypeTree;

  public constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.name = ctx.ID().text;
    this.type = getTypeTree(ctx.type());
  }

  public static fromArgument(argument: ArgumentTree): ParameterTree {
    const parameter = new ParameterTree();
    parameter.name = argument.name;
    parameter.type = argument.value.getType();
    return parameter;
  }
}
