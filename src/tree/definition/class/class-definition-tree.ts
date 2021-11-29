import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  expressionParameters: ExpressionParameterTree[] = [];
  ancestor?: DefinitionAncestorTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx: ClassDefinitionContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.expressionParameters = getExpressionParametersTrees(ctx.methodParameters());
    const ancestor = ctx.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.attribute());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(' ') + '>'
      : '';
    const expressionParameters = this.expressionParameters.length
      ? '(' + this.expressionParameters.join(' ') + ')'
      : '';
    const ancestor = this.ancestor ? ' ' + this.ancestor.toString() : '';
    const attributes = this.attributes.join('\n').replace(/^/gm, '  ');
    return `${this.id}${typeParameters}${expressionParameters}${this.ancestor}\n${this.attributes}`;
  }
}
