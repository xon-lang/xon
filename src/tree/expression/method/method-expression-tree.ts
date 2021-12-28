import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { DeclarationTree } from '../../declaration/declaration-tree';
import { getDeclarationTrees } from '../../declaration/declaration-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MethodExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  parameters: DeclarationTree[] = [];
  result?: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.parameters = getDeclarationTrees(ctx.declaration());
    this.result = getExpressionTree(ctx.expr()) || null;
  }

  toString(): string {
    const result = this.result ? ' ' + this.result : '';
    return `(${this.parameters.join(', ')})${result}`;
  }
}
