import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { IssueService } from '../../../issue-service/issue-service';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: ParenthesizedExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression());

    this.validate();
  }

  public getType(): TypeTree {
    return this.value.getType();
  }

  private validate() {
    if (!this.value.getType())
      IssueService.instance.addError(
        this.value,
        'Parenthesized expression has not data type',
        `Set "${this.value.metaType}" expression data type`,
      );
  }
}
