import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
  getType(): TypeTree {
    throw new Error(this.toJson());
  }
}
