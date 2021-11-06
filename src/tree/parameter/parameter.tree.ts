import { ParameterContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  id: IdToken;
  isPrivate: boolean;
  type?: TypeTree;
  metaType?: string;
  typeMetadata: TypeMetadata;

  constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.isPrivate = this.id.text.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.metaType = ctx._meta?.text || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
  }
}
