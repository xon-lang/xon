import { ParameterContext } from '../../grammar/xon-parser';
import { BodyNode } from '../body/body-node';
import { getBodyNode } from '../body/body-node-helper';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression/expression-node-helper';
import { IdToken } from '../id-token';
import { Node } from '../node';

export class ParameterNode extends Node {
  modifier: IdToken;
  hasSpread: boolean;
  id: IdToken;
  generics?: ExpressionNode[];
  type?: ExpressionNode;
  body?: BodyNode;
  meta?: IdToken;

  constructor(public ctx: ParameterContext) {
    super();

    this.modifier = (ctx.modifier() && IdToken.fromContext(ctx.modifier())) || null;
    this.hasSpread = !!ctx.SPREAD();
    this.id = IdToken.fromContext(ctx.parameterId());
    this.generics = getExpressionNodes(ctx.generics()) || null;
    this.type = getExpressionNode(ctx.expr()) || null;
    this.body = getBodyNode(ctx.body()) || null;
    this.meta = (ctx._meta && new IdToken(ctx._meta)) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}
