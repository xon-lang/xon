import { AttributeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';

export class AttributeDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  ancestor?: DefinitionAncestorTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx: AttributeDefinitionContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    const ancestor = ctx.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.attribute());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(' ') + '>'
      : '';
    const ancestor = this.ancestor ? ' ' + this.ancestor.toString() : '';
    const attributes = this.attributes.join('\n').replace(/^/gm, '  ');
    return `${this.id}${typeParameters}${this.ancestor}\n${this.attributes}`;
  }
}
