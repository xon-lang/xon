import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { SourceReference } from '../../../util/source-reference';
import { LiteralTree } from '../../literal/literal-tree';
import { getLiteralTree } from '../../literal/literal-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class LiteralExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  metadata: LiteralExpressionMetadata;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  toString(): string {
    return this.literal.sourceReference.text;
  }
}
