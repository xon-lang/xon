import { ArgumentContext, ArgumentsContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { MemberExpressionTree } from '../expression/member-expression/member-expression.tree';

export class ArgumentTree extends BaseTree {
  public name?: string;

  public value: ExpressionTree;

  public constructor(public ctx: ArgumentContext) {
    super();

    this.value = getExpressionTree(ctx.expression());
    this.name = ctx.id()?.text || this.valueName();
  }

  public static fromContext(ctx: ArgumentsContext): ArgumentTree[] {
    return ctx?.argument()?.map((x) => new ArgumentTree(x)) || [];
  }

  private valueName(): string {
    if (this.value instanceof IdExpressionTree) return this.value.name;
    if (this.value instanceof MemberExpressionTree) return this.value.name;
    return null;
  }
}
