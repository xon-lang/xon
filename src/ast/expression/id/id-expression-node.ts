import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionNode } from '../expression-node';
import { getExpressionNodes } from '../expression-node-helper';

export class IdExpressionNode extends ExpressionNode {
  metadata: IdExpressionMetadata;
  id: IdToken;
  generics: ExpressionNode[];

  constructor(public ctx: IdExpressionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.generics = getExpressionNodes(ctx.generics());
  }

  toString(): string {
    const generics = this.generics.length ? '<' + this.generics.join(', ') + '>' : '';
    if (generics) return `${this.id}<${this.generics}>`;
    return this.id.toString();
  }
}
