import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { IdToken } from '../../id-token';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { AttributeClassMemberTree } from './class-member/attribute-class-member/attribute-class-member-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';

export class ClassDefinitionTree extends DefinitionTree {
  genericParameters: TypeParameterTree[] = [];
  parameters: ExpressionParameterTree[];
  baseType?: TypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericParameters = getTypeParametersTrees(ctx.genericParameters()?.genericParameter());
    this.parameters = getExpressionParametersTrees(ctx.functionParameters());
    this.baseType = getTypeTree(ctx.type());
    this.attributes = getClassMembersTrees(ctx.classMember()).map(
      (x) => (x as AttributeClassMemberTree).attribute,
    );
  }
}
