import { TypeParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class TypeParameterTree extends BaseTree {
  id: IdToken;
  hasSpread: boolean;

  constructor(public ctx?: TypeParameterContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.hasSpread = !!ctx.SPREAD();
  }

  toString(): string {
    if (this.hasSpread) return `...${this.id}`;
    return `${this.id}`;
  }
}
