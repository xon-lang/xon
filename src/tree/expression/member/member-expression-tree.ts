import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MemberExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  instance: ExpressionTree;
  id: IdTree;

  constructor(ctx: MemberExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expr());
    this.id = getIdTree(ctx.id());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
