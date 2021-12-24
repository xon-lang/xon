import { IdContext } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNodes } from '../expression/expression-node-helper';
import { Node } from '../node';
import { IdToken } from '../util/id-token';
import { SourceReference } from '../util/source-reference';

export class IdNode implements Node {
  sourceReference: SourceReference;
  name: IdToken;
  generics: ExpressionNode[] = [];

  constructor(ctx: IdContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
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
