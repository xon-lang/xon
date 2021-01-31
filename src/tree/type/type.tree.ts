import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class TypeTree extends BaseTree {
  name: string;

  isArray: boolean;

  constructor(public ctx: TypeContext) {
    super();
    this.name = ctx.ID().text;
    this.isArray = !!ctx.OpenBracket();
  }
}
