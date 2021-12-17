import { TypeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-node';
import { getAttributeNodes } from '../../attribute/attribute-node-helper';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class ObjectDefinitionTree extends DefinitionTree {
  id: IdToken;
  ancestors: TypeTree[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx: TypeDefinitionContext) {
    super();

    const header = ctx.definitionHeader();
    this.id = IdToken.fromContext(header.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    if (header.typeParameters()) throw new Error('Object must not have a type parameters');
    if (header.parameters()) throw new Error('Object must not have a constructor');

    this.ancestors = getTypesTrees(header.definitionAncestors()?.type());
    this.attributes = getAttributeNodes(ctx.definitionBody()?.attribute());
  }

  toString(): string {
    const ancestors = this.ancestors.length ? ' is ' + this.ancestors.join(', ') : '';
    const attributes = this.attributes.join('\n\n').replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${ancestors}\n${attributes}`;
  }
}
