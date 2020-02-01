import { BaseTree } from '../base.tree';
import { ExpressionContext } from '../../grammar/.antlr/XonParser';
export declare abstract class ExpressionTree extends BaseTree {
    ctx: ExpressionContext;
    constructor();
    toString(): string;
}
