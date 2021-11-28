import { AttributeModifierContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class AttributeModifierTree extends BaseTree {
  id: IdToken;
  isPrefix: boolean;
  isInfix: boolean;
  isPostfix: boolean;

  constructor(public ctx?: AttributeModifierContext) {
    super();
    if (!ctx) return;

    this.id = IdToken.fromContext(ctx);
    this.isPrefix = !!ctx.PREFIX();
    this.isInfix = !!ctx.INFIX();
    this.isPostfix = !!ctx.POSTFIX();
  }
}
