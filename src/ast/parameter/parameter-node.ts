import { ParameterContext } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode } from '../expression/expression-node-helper';
import { IdToken } from '../id-token';
import { Node } from '../node';

export class ParameterNode extends Node {
  id: IdToken;
  type?: ExpressionNode;
  meta?: IdToken;

  constructor(public ctx: ParameterContext) {
    super();

    this.id = IdToken.fromContext(ctx._name);
    this.type = getExpressionNode(ctx.expr()) || null;
    this.meta = (ctx._meta && IdToken.fromContext(ctx._meta)) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}
