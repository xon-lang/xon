import { AliasDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class AliasDefinitionTree extends DefinitionTree {
  id: IdToken;
  type: TypeTree;
  typeParameters: TypeParameterTree[] = [];

  constructor(public ctx: AliasDefinitionContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.type = getTypeTree(ctx.type());
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    return `${this.id}${typeParameters} = ${this.type}`;
  }
}
