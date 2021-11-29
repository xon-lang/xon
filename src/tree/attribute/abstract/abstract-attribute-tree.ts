import { AbstractAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeModifierTree } from '../attribute-modifier-tree';
import { AttributeTree } from '../attribute-tree';

export class AbstractAttributeTree extends AttributeTree {
  modifiers: AttributeModifierTree[] = [];
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  type: TypeTree;

  constructor(public ctx: AbstractAttributeContext) {
    super();

    const header = ctx.attributeHeader();
    this.modifiers = header.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(header.attributeName());
    this.typeParameters = getTypeParametersTrees(header.typeParameters()) || [];
    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    const modifiers = this.modifiers.length ? this.modifiers.join(' ') + ' ' : '';
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    return `${modifiers}${this.id}${typeParameters} ${this.type}`;
  }
}
