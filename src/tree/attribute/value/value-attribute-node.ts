import { ValueAttributeContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdToken } from '../../id-token';
import { AttributeTree } from '../attribute-node';

export class ValueAttributeNode extends AttributeTree {
  id: IdToken;
  type?: ExpressionNode;
  value?: ExpressionNode;

  constructor(public ctx: ValueAttributeContext) {
    super();

    if (ctx.attrId().operator()) {
      throw new Error(`Must not be operator but '${ctx.attrId().text}`);
    }

    this.id = IdToken.fromContext(ctx.attrId());
    this.type = getExpressionNode(ctx._type) || null;
    this.value = getExpressionNode(ctx._value) || null;
  }

  toString(): string {
    const type = ' ' + this.type || '';
    const value = ': ' + this.value || '';
    return `${this.id}${type}${value}`;
  }
}
