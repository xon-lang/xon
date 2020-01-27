import { BaseTree } from '../base.tree';
import { ExpressionContext } from '../../grammar/.antlr/XonParser';

export abstract class ExpressionTree extends BaseTree {
    ctx: ExpressionContext;

    constructor() {
        super();
    }

    toString() {
        return this.ctx?.text;
    }
}
