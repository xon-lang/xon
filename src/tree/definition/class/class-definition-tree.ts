import { TypeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-node';
import { getAttributeNodes } from '../../attribute/attribute-node-helper';
import { IdToken } from '../../id-token';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { ParameterNode } from '../../parameter/parameter-node';
import { getGenericNodes } from '../../generic/generic-node-helper';
import { GenericNode } from '../../generic/generic-node';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: GenericNode[] = [];
  parameters: ParameterNode[] = [];
  ancestors: TypeTree[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx: TypeDefinitionContext) {
    super();

    const header = ctx.definitionHeader();
    this.id = IdToken.fromContext(header.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    this.typeParameters = getGenericNodes(header.typeParameters());
    const spreadParameters = this.typeParameters.filter((x) => x.hasSpread);
    if (spreadParameters.length > 1) {
      throw new Error(`Spread generic parameter must be only but '${spreadParameters.length}'`);
    }
    this.parameters = getParameterNodes(header.parameters());
    this.ancestors = getTypesTrees(header.definitionAncestors()?.type());
    this.attributes = getAttributeNodes(ctx.definitionBody()?.attribute());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const ancestors = this.ancestors.length ? ' is ' + this.ancestors.join(', ') : '';
    const attributes = this.attributes.join('\n\n').replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${typeParameters}(${this.parameters.join(', ')})${ancestors}\n${attributes}`;
  }
}
