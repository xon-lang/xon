import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  id: IdTree;

  constructor(ctx: IdExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx.id());
  }

  toString(): string {
    return this.id.toString();
  }
}
