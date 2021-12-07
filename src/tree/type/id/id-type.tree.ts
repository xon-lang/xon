import { IdTypeContext } from '../../../grammar/xon-parser';
import { TypeMetadata } from '../../../metadata/type/type-metadata';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IdTypeTree extends TypeTree {
  id: IdToken;
  typeArguments: TypeTree[] = [];

  constructor(public ctx: IdTypeContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    const typeParameters = this.typeArguments.join(', ');
    if (this.typeArguments.length) return `${this.id.text}<${typeParameters}>`;
    return this.id.text;
  }
}
