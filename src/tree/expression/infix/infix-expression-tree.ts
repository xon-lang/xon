import { ExprContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../../util/id-token';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;

  constructor(
    ctx: ExprContext,
    public id: IdToken,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    this.sourceReference = SourceReference.fromContext(ctx);
  }

  toString(): string {
    return ;
  }
}
