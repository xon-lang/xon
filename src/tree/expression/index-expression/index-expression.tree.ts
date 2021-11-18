import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsTrees } from '../../argument/argument-tree.helper';
import { ArgumentTree } from '../../argument/argument.tree';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  genericArguments: TypeTree[];
  instance: ExpressionTree;
  arguments: ArgumentTree[];

  constructor(public ctx?: IndexExpressionContext) {
    super();
    if (!ctx) return;

    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getArgumentsTrees(ctx.indexArguments());
  }

  toString(): string {
    const generics = this.genericArguments.length ? `<${this.genericArguments.join(', ')}>` : '';
    const args = this.arguments.length ? `(${this.arguments.join(', ')})` : '';
    return `${this.instance}${generics}${args}`;
  }
}
