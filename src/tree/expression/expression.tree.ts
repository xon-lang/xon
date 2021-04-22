import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  // public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');

  abstract ctx?: ExpressionContext;
}
