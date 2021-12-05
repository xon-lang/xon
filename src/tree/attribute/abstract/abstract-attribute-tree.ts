import { AbstractAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeTree } from '../attribute-tree';

export class AbstractAttributeTree extends AttributeTree {
  id: IdToken;
  isOperator: boolean;
  type: TypeTree;

  constructor(public ctx: AbstractAttributeContext) {
    super();

    this.id = IdToken.fromContext(ctx.attributeId());
    this.isOperator = !!ctx.attributeId().operator();
    this.type = getTypeTree(ctx.type()) as LambdaTypeTree;
  }

  toString(): string {
    const type = this.type instanceof LambdaTypeTree ? this.type : ' ' + this.type;
    return `${this.id}${type}`;
  }
}
