import { ParameterContext } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode } from '../expression/expression-node-helper';
import { IdNode } from '../id/id-node';
import { getIdNode } from '../id/id-node-helper';
import { Node } from '../node';
import { IdToken } from '../util/id-token';
import { SourceReference } from '../util/source-reference';

export class ParameterNode implements Node {
  sourceReference: SourceReference;
  hasSpread: boolean;
  id: IdNode;
  type?: ExpressionNode;
  meta?: IdToken;

  constructor(ctx: ParameterContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.hasSpread = !!ctx.SPREAD();
    this.id = getIdNode(ctx.id());
    this.type = getExpressionNode(ctx.expr()) || null;
    this.meta = (ctx._meta && new IdToken(ctx._meta)) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}
