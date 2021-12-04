import { AliasDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class AliasDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  type: TypeTree;

  constructor(public ctx: AliasDefinitionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    return `${this.id}${typeParameters}: ${this.type}`;
  }
}
