import { IdExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree implements ExpressionTree {
  sourceReference: SourceRange;
  metadata: ExpressionMetadata;
  id: IdTree;

  constructor(ctx: IdExpressionContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.id = getIdTree(ctx.id());
  }

  toString(): string {
    return this.id.toString();
  }
}
