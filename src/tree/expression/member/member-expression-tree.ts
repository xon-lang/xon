import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MemberExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: MemberExpressionMetadata;
  instance: ExpressionTree;
  name: IdToken;

  constructor(ctx: MemberExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expr());
    this.name = new IdToken(ctx._name);
  }

  toString(): string {
    return `${this.instance}.${this.name}`;
  }
}
