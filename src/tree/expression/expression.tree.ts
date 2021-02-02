/* eslint-disable class-methods-use-this */
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
  getType(): TypeTree {
    return null;
  }
}
