import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { getIdToken, IdToken } from '../../../util/id-token';
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
    this.name = getIdToken(ctx._name);
  }

  toString(): String {
    return `${this.instance}.${this.name}`;
  }
}
