import { PropertyContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class PropertyTree extends BaseTree {
  public name: string;
  public isPrivate: boolean;
  public type?: TypeTree;
  public value?: ExpressionTree;

  public constructor(public ctx?: PropertyContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.isPrivate = this.name.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.value = getExpressionTree(ctx.expression()) || null;
  }
}
