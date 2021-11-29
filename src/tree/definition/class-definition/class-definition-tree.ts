import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionBaseTypeTree } from '../definition-base-type-tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  parameters: ExpressionParameterTree[] = [];
  baseType?: DefinitionBaseTypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.parameters = getExpressionParametersTrees(ctx.functionParameters());
    this.baseType = new DefinitionBaseTypeTree(ctx.definitionBaseType());
    this.attributes = getAttributesTrees(ctx.attribute());
  }
}
