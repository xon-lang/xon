import { AttributeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionBaseTypeTree } from '../definition-base-type-tree';
import { DefinitionTree } from '../definition-tree';

export class AttributeDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  baseType?: DefinitionBaseTypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: AttributeDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.baseType = new DefinitionBaseTypeTree(ctx.definitionBaseType());
    this.attributes = getAttributesTrees(ctx.attribute());
  }
}
