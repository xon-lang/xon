import { ProgramContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ScopeTree } from '../scope/scope.tree';
export declare class ProgramTree extends BaseTree {
    ctx: ProgramContext;
    scopes: ScopeTree[];
    constructor(ctx: ProgramContext);
    toPlain(): {
        scopes: any[];
        type: string;
    };
}
