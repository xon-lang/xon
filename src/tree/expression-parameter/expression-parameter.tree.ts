import { ExpressionParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ExpressionParameterTree extends BaseTree {
  id: IdToken;
  isPrivate: boolean;
  type?: TypeTree;
  metaType?: string;

  constructor(public ctx: ExpressionParameterContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.isPrivate = this.id.text.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.metaType = ctx._meta?.text || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
  }
}
