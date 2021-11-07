import { AttributeModifierContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class AttributeModifierTree extends BaseTree {
  id: IdToken;
  isInfix: boolean;
  isPostfix: boolean;

  constructor(public ctx?: AttributeModifierContext) {
    super();
    if (!ctx) return;

    this.id = IdToken.fromContext(ctx);
    this.isInfix = !!ctx.INFIX();
    this.isPostfix = !!ctx.POSTFIX();
  }
}
