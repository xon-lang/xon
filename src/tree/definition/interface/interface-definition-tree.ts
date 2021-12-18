import { SpreadExpressionContext, TypeDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-node';
import { getAttributeNodes } from '../../attribute/attribute-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNodes } from '../../expression/expression-node-helper';
import { IdToken } from '../../id-token';
import { DefinitionTree } from '../definition-tree';

export class InterfaceDefinitionTree extends DefinitionTree {
  id: IdToken;
  generics: ExpressionNode[] = [];
  ancestors: ExpressionNode[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx: TypeDefinitionContext) {
    super();

    const header = ctx.definitionHeader();
    this.id = IdToken.fromContext(header.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);
    this.generics = getExpressionNodes(header.methodHeader().generics());
    const spreadParameters = header
      .methodHeader()
      .generics()
      .arguments()
      .expr()
      .filter((x) => x instanceof SpreadExpressionContext);
    if (spreadParameters.length > 1) {
      throw new Error(`Spread generic parameter must be only but '${spreadParameters.length}'`);
    }

    if (header.methodHeader().parameter()) throw new Error('Interface must not have a constructor');

    this.ancestors = getExpressionNodes(header.definitionAncestors()?.expr());
    this.attributes = getAttributeNodes(ctx.definitionBody()?.attribute());
  }

  toString(): string {
    const typeParameters = this.generics.length ? '<' + this.generics.join(', ') + '>' : '';
    const ancestors = this.ancestors.length ? ' is ' + this.ancestors.join(', ') : '';
    const attributes = this.attributes.join('\n\n').replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${typeParameters}${ancestors}\n${attributes}`;
  }
}
