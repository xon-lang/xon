import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTrees } from '../expression-tree-helper';

export class ArrayExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ArrayExpressionMetadata;
  items: ExpressionTree[];

  constructor(ctx: ArrayExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    // todo add associated array items
    this.items = getExpressionTrees(ctx.arrayItem().map((x) => x.expr(0)));
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
