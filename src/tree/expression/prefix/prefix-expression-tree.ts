import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ExpressionMetadata;
  operator: IdToken;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.operator = new IdToken(ctx._op);
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `${this.operator}${this.value}`;
  }
}
