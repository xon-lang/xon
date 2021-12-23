import { ParameterContext } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode } from '../expression/expression-node-helper';
import { IdToken } from '../util/id-token';
import { IdNode } from '../id/id-node';
import { getIdNode } from '../id/id-node-helper';
import { Node } from '../node';

export class ParameterNode extends Node {
  hasSpread: boolean;
  id: IdNode;
  type?: ExpressionNode;
  meta?: IdToken;

  constructor(public ctx: ParameterContext) {
    super();

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
