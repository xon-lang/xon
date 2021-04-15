import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';

export abstract class ExpressionTree extends BaseTree {
  public metaType: string = this.constructor.name.replace(/ExpressionTree/, '');

  public type: TypeTree;

  abstract ctx?: ExpressionContext;
}
