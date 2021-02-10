/* eslint-disable @typescript-eslint/dot-notation */
import { ExpressionContext } from '../../grammar/xon-parser';
import { getInfixType } from '../type/get-infix-type.util';
import { TypeTree } from '../type/type.tree';
import { ExpressionTree } from './expression.tree';

export abstract class BinaryExpressionTree extends ExpressionTree {
  left: ExpressionTree;

  right: ExpressionTree;

  constructor(public ctx: ExpressionContext) {
    super();
    this.left = global['getExpressionTree'](ctx['_left']);
    this.right = global['getExpressionTree'](ctx['_right']);
  }

  getType(): TypeTree {
    return getInfixType('+', this.left, this.right);
  }
}
