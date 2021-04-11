import { LoopStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTrees } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class LoopStatementTree extends StatementTree {
  public keyword: string;

  public isInfinity: boolean;

  public indexName: string;

  public keyName: string;

  public valueName: string;

  public expression?: ExpressionTree;

  public statements: StatementTree[];

  public constructor(public ctx?: LoopStatementContext) {
    super();
    if (!ctx) return;

    this.keyword = ctx.LOOP().text;
    this.isInfinity = !ctx.expression();
    this.indexName = ctx._index?.text;
    this.keyName = ctx._key?.text;
    this.valueName = ctx._value?.text;
    this.expression = ctx.expression() && getExpressionTree(ctx.expression());
    this.statements = getStatementsTrees(ctx.body());
  }
}
