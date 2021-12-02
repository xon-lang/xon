import { AttributeDefinitionContext } from '../../../grammar/xon-parser';
import { AbstractAttributeTree } from '../../attribute/abstract/abstract-attribute-tree';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { MethodAttributeTree } from '../../attribute/method/method-attribute-tree';
import { ValueAttributeTree } from '../../attribute/value/value-attribute-tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';
import { getDefinitionsTrees } from '../definition-tree-helper';

export class AttributeDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  ancestor?: DefinitionAncestorTree;
  definitions: DefinitionTree[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx: AttributeDefinitionContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    const ancestor = ctx.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.definitions = getDefinitionsTrees(ctx.definition());
    this.attributes = getAttributesTrees(ctx.attribute());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const ancestor = this.ancestor ? ' ' + this.ancestor.toString() : '';
    const definitions = this.definitions.join('\n');
    const abstractAttributes = this.attributes
      .filter((x) => x instanceof AbstractAttributeTree)
      .join('\n');
    const valueAttributes = this.attributes
      .filter((x) => x instanceof ValueAttributeTree)
      .join('\n');
    const methodAttributes = this.attributes
      .filter((x) => x instanceof MethodAttributeTree && !x.modifiers.length)
      .join('\n\n');
    const operatorAttributes = this.attributes
      .filter((x) => x instanceof MethodAttributeTree && x.modifiers.length)
      .join('\n\n');
    const attributes = [
      definitions,
      abstractAttributes,
      valueAttributes,
      methodAttributes,
      operatorAttributes,
    ]
      .filter((x) => x)
      .join('\n\n')
      .replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${typeParameters}${ancestor}\n${attributes}`;
  }
}
