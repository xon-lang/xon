import { AliasDefinitionContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode, getExpressionNodes } from '../../expression/expression-node-helper';
import { IdToken } from '../../id-token';
import { DefinitionTree } from '../definition-tree';

export class AliasDefinitionTree extends DefinitionTree {
  id: IdToken;
  generics: ExpressionNode[] = [];
  type: ExpressionNode;

  constructor(public ctx: AliasDefinitionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    this.generics = getExpressionNodes(ctx.generics());
    this.type = getExpressionNode(ctx._type);
  }

  toString(): string {
    const typeParameters = this.generics.length ? '<' + this.generics.join(', ') + '>' : '';
    return `${this.id}${typeParameters}: ${this.type}`;
  }
}
