import { ForStatementContext } from '../../../grammar/xon-parser';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree.helper';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ForStatementTree extends StatementTree {
  public valueVarName?: string;
  public indexVarName?: string;
  public expression: ExpressionTree;
  public body: BodyTree;

  public constructor(public ctx?: ForStatementContext) {
    super();
    if (!ctx) return;

    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionTree(ctx.expression());
    this.body = getBodyTree(ctx.body());
  }
}
