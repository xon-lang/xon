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
  ancestor?: DefinitionBaseTypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: AttributeDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    const ancestor = ctx.definitionBaseType();
    this.ancestor = (ancestor && new DefinitionBaseTypeTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.attribute());
  }
}
