import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MemberExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: MemberExpressionMetadata;
  instance: ExpressionTree;
  id: IdTree;

  constructor(ctx: MemberExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expr());
    this.id = getIdTree(ctx.id());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
