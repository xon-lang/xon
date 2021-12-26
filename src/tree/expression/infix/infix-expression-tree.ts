import { ExprContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;

  constructor(
    ctx: ExprContext,
    public id: IdToken,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {}

  toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
