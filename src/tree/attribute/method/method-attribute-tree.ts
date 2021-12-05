import { MethodAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getStatementsTrees } from '../../statement/statement-tree.helper';
import { StatementTree } from '../../statement/statement.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { AttributeTree } from '../attribute-tree';

export class MethodAttributeTree extends AttributeTree {
  id: IdToken;
  type: LambdaTypeTree;
  body: StatementTree[] = [];

  constructor(public ctx: MethodAttributeContext) {
    super();

    this.id = IdToken.fromContext(ctx.attributeId());
    this.type = getTypeTree(ctx.type()) as LambdaTypeTree;
    this.body = getStatementsTrees(ctx.statement());

    if (!(this.type instanceof LambdaTypeTree))
      throw new Error(`Type must be a LambdaType but ${this.type}`);
  }

  toString(): string {
    const body = this.body.join('\n').replace(/^/gm, '  ');
    return `${this.id}${this.type}\n${body}`;
  }
}
