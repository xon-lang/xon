import { IdContext } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNodes } from '../expression/expression-node-helper';
import { IdToken } from '../id-token';
import { Node } from '../node';

export class IdNode extends Node {
  name: IdToken;
  generics: ExpressionNode[] = [];

  constructor(public ctx: IdContext) {
    super();

    this.name = new IdToken(ctx._name);
    this.generics = getExpressionNodes(ctx.expr());
  }

  toString(): string {
    if (this.generics) {
      return `${this.name}<|${this.generics}|>`;
    }
    return this.name.toString();
  }
}
