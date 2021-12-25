import { DeclarationContext } from '../../grammar/xon-parser';
import { BodyNode } from '../body/body-node';
import { getBodyNode } from '../body/body-node-helper';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode } from '../expression/expression-node-helper';
import { IdNode } from '../id/id-node';
import { getIdNode } from '../id/id-node-helper';
import { Node } from '../node';
import { SourceReference } from '../util/source-reference';

export class DeclarationNode implements Node {
  sourceReference: SourceReference;
  modifier?: Modifier;
  hasSpread: boolean;
  id: IdNode;
  type?: ExpressionNode;
  base: ExpressionNode;
  body?: BodyNode;

  constructor(ctx: DeclarationContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && Modifier[ctx.modifier().text]) || null;
    this.hasSpread = !!ctx.SPREAD();
    this.id = getIdNode(ctx.id());
    this.type = getExpressionNode(ctx._type) || null;
    this.base = getExpressionNode(ctx._base);
    this.body = getBodyNode(ctx.body()) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}

export enum Modifier {
  class,
  interface,
  object,
}
