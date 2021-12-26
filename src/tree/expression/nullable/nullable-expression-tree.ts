import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class NullableExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  value: ExpressionTree;

  constructor(ctx: NullableExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `${this.value}?`;
  }
}
