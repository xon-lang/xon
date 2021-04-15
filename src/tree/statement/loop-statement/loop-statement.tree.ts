import { LoopStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { TypeTree } from '../../type/type.tree';
import { getBody } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class LoopStatementTree extends StatementTree {
  public keyword: string;

  public isInfinity: boolean;

  public index: { name: string; type?: TypeTree };

  public value: { name: string; type?: TypeTree };

  public expression?: ExpressionTree;

  public body: StatementTree[];

  public constructor(public ctx?: LoopStatementContext) {
    super();
    if (!ctx) return;

    this.keyword = ctx.LOOP().text;
    this.isInfinity = !ctx.expression();
    this.index = ctx._index && { name: ctx._index.text };
    this.value = ctx._value && { name: ctx._value.text };
    this.expression = ctx.expression() && getExpressionTree(ctx.expression());
    this.body = getBody(ctx.body());
  }
}
