import { IndexerExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { ParameterNode } from '../../parameter/parameter-node';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class IndexerExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  generics: ExpressionNode[];
  parameters: ParameterNode[];
  body: ExpressionNode;

  constructor(public ctx: IndexerExpressionContext) {
    super();

    this.generics = getExpressionNodes(ctx.indexerHeader().generics());
    this.parameters = getParameterNodes(ctx.indexerHeader().parameter());
    this.body = getExpressionNode(ctx.expr());
  }

  toString(): string {
    const generics = this.generics.length ? '<' + this.generics.join(', ') + '>' : '';
    if (generics) {
      return `<${this.generics}>(${this.parameters.join(', ')}): ${this.body}`;
    }
    return `(${this.parameters.join(', ')}): ${this.body}`;
  }
}
