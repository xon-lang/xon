import { ValueAttributeContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeModifierTree } from '../attribute-modifier-tree';
import { AttributeTree } from '../attribute-tree';

export class ValueAttributeTree extends AttributeTree {
  modifiers: AttributeModifierTree[] = [];
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  type?: TypeTree;
  expression: ExpressionTree;

  constructor(public ctx: ValueAttributeContext) {
    super();

    const header = ctx.attributeHeader();
    this.modifiers = header.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(header.attributeName());
    this.typeParameters = getTypeParametersTrees(header.typeParameters()) || [];
    this.type = getTypeTree(ctx.type()) || null;
    this.expression = getExpressionTree(ctx.expression()) || null;
  }

  toString(): string {
    const modifiers = this.modifiers.length ? this.modifiers.join(' ') + ' ' : '';
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';

    const type = this.type instanceof LambdaTypeTree ? this.type : this.type ? ' ' + this.type : '';
    return `${modifiers}${this.id}${typeParameters}${type} = ${this.expression}`;
  }
}
