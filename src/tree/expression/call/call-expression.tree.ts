import { CallExpressionContext } from '../../../grammar/xon-parser';
import { CallExpressionMetadata } from '../../../metadata/expression/call/call-expression-metadata';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  metadata: CallExpressionMetadata;
  instance: ExpressionTree;
  typeArguments: TypeTree[];
  arguments: ExpressionTree[];

  constructor(public ctx: CallExpressionContext) {
    super();

    this.instance = getExpressionTree(ctx.expression());
    this.typeArguments = getTypesTrees(ctx.typeArguments().type());
    this.arguments = getExpressionsTrees(ctx.lambdaArguments().expression());
  }

  toString(): string {
    const typeArguments = this.typeArguments.length
      ? '<' + this.typeArguments.join(', ') + '>'
      : '';
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
