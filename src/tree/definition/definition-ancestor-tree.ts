import { DefinitionAncestorContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypesTrees } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionAncestorTree extends BaseTree {
  id: IdToken;
  typeArguments: TypeTree[] = [];

  constructor(public ctx: DefinitionAncestorContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    const typeArguments = this.typeArguments.length
      ? '<' + this.typeArguments.join(', ') + '>'
      : '';
    return `is ${this.id}${typeArguments}`;
  }
}
