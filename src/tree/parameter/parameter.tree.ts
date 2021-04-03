import { ParameterContext } from '../../grammar/xon-parser';
import { ArgumentTree } from '../argument/argument.tree';
import { BaseTree } from '../base.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  private _generics: Map<string, TypeTree> = new Map();

  private _type: TypeTree;

  public constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.name = ctx.ID().text;
    this._type = getTypeTree(ctx.type());
  }

  public static fromArgument(argument: ArgumentTree): ParameterTree {
    const parameter = new ParameterTree();
    parameter.name = argument.name;
    parameter._type = argument.value.getType();
    return parameter;
  }

  public useGenerics(generics: Map<string, TypeTree>): ParameterTree {
    this._generics = generics;
    return this;
  }

  public getType(): TypeTree {
    return this._generics.get(this.name) || this._type;
  }
}
