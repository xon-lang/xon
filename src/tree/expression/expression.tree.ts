import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  public ctx?: ExpressionContext;

  public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');
}
