import { ParameterContext, ParametersContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;

  public typeTree?: TypeTree;

  public metaType?: string;

  public value?: ExpressionTree;

  public constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.typeTree = getTypeTree(ctx.type());
    this.metaType = ctx._meta?.text;
    this.value = getExpressionTree(ctx.expression());
  }

  public static fromContext(ctx: ParametersContext): ParameterTree[] {
    return ctx?.parameter()?.map((x) => new ParameterTree(x)) || [];
  }
}
