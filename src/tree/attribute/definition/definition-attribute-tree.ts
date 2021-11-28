import { DefinitionAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AttributeModifierTree } from '../attribute-modifier-tree';
import { AttributeTree } from '../attribute-tree';
import { getAttributesTrees } from '../attribute-tree.helper';

export class DefinitionAttributeTree extends AttributeTree {
  modifiers: AttributeModifierTree[] = [];
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  baseType: TypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: DefinitionAttributeContext) {
    super();
    if (!ctx) return;

    const header = ctx.attributeHeader();
    this.modifiers = header.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(header.attributeName());
    this.typeParameters = getTypeParametersTrees(header.typeParameters()) || [];
    this.baseType = getTypeTree(ctx.type()) || null;
    this.attributes = getAttributesTrees(ctx.attribute()) || [];
  }
}
