import { ScopeContext } from '../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression/expression.tree';
import { BaseTree } from '../base.tree';
import { StatementTree } from '../statement/statement.tree';
export declare class ScopeTree extends BaseTree {
    ctx: ScopeContext;
    args: {
        name: string;
        type: string;
        value: ExpressionTree;
    }[];
    name: string;
    statements: StatementTree[];
    scopes: ScopeTree[];
    constructor(ctx: ScopeContext);
    toPlain(): any;
}
