import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributeTree } from '../../attribute/attribute-tree.helper';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  parameters: ExpressionParameterTree[];
  baseType?: TypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.parameters = getExpressionParametersTrees(ctx.functionParameters());
    this.baseType = getTypeTree(ctx.type());
    this.attributes = ctx.attribute().map((x) => getAttributeTree(x));
  }
}
