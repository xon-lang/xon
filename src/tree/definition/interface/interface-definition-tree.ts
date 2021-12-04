import { TypeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { IdToken } from '../../id-token';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';

export class InterfaceDefinitionTree extends DefinitionTree {
  id: IdToken;
  ancestor?: DefinitionAncestorTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx: TypeDefinitionContext) {
    super();

    const header = ctx.definitionHeader();
    this.id = new IdToken(header._name);

    const ancestor = header.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.definitionBody()?.attribute());
  }

  toString(): string {
    const ancestor = this.ancestor ? ' ' + this.ancestor : '';
    const attributes = this.attributes.join('\n\n').replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${ancestor}\n${attributes}`;
  }
}
