import { TypeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { IdToken } from '../../id-token';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  type: LambdaTypeTree;
  ancestor?: DefinitionAncestorTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx: TypeDefinitionContext) {
    super();

    const header = ctx.definitionHeader();
    this.id = IdToken.fromContext(header.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    this.type = getTypeTree(header.type()) as LambdaTypeTree;
    if (!(this.type instanceof LambdaTypeTree) || this.type.resultType)
      throw new Error('Type must be a LambdaType');

    const ancestor = header.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.definitionBody()?.attribute());
  }

  toString(): string {
    const ancestor = this.ancestor ? ' ' + this.ancestor : '';
    const attributes = this.attributes.join('\n\n').replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${this.type}${ancestor}\n${attributes}`;
  }
}
