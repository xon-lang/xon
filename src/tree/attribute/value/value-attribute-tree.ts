import { ValueAttributeContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeTree } from '../attribute-tree';

export class ValueAttributeTree extends AttributeTree {
  id: IdToken;
  type?: TypeTree;
  expression: ExpressionTree;

  constructor(public ctx: ValueAttributeContext) {
    super();

    this.id = IdToken.fromContext(ctx.attributeId());
    this.type = (getTypeTree(ctx.type()) as LambdaTypeTree) || null;
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    const type = this.type instanceof LambdaTypeTree ? this.type : ' ' + this.type;
    return `${this.id}${type}: ${this.expression}`;
  }
}
