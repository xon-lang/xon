import { ExprContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';

export class InfixExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;

  constructor(
    ctx: ExprContext,
    public id: IdToken,
    public left: ExpressionNode,
    public right: ExpressionNode,
  ) {}

  toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
