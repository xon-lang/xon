import { ValueAttributeContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeModifierTree } from '../attribute-modifier-tree';
import { AttributeTree } from '../attribute-tree';

export class ValueAttributeTree extends AttributeTree {
  modifiers: AttributeModifierTree[];
  id: IdToken;
  type?: TypeTree;
  expression: ExpressionTree;

  constructor(public ctx?: ValueAttributeContext) {
    super();
    if (!ctx) return;

    this.modifiers = ctx.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(ctx.attributeName());
    this.type = getTypeTree(ctx.type()) || null;
    this.expression = getExpressionTree(ctx.expression()) || null;
  }
}
