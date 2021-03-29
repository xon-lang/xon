import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { IssueService } from '../../../issue-service/issue-service';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: ParenthesizedExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression());

    if (!this.value.dataType)
      IssueService.instance.addError(
        this.value,
        `Set "${this.value.metaType}" expression data type`,
      );
    this.dataType = this.value.dataType;
  }
}
