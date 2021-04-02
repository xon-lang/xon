/* eslint-disable class-methods-use-this */
import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
  public ctx?: ExpressionContext;

  public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');

  abstract getType(): TypeTree;
}
