import { MetaTypeContext } from '../../../grammar/xon-parser';
import { TypeMetadata } from '../../../metadata/type/type-metadata';
import { IdToken } from '../../id-token';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class MetaTypeTree extends TypeTree {
  metadata: TypeMetadata;
  id: IdToken;
  type: TypeTree;

  constructor(public ctx: MetaTypeContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    return `${this.type}#${this.id.text}`;
  }
}
