import { BaseTree } from '../base.tree';
import { ExpressionContext } from '../../grammar/xon-parser';

export abstract class ExpressionTree extends BaseTree {
    ctx: ExpressionContext;

    constructor() {
        super();
    }

    toString() {
        return this.ctx?.text;
    }
}
