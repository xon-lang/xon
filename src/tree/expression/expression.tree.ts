import { ExpressionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  abstract ctx?: ExpressionContext;
}
