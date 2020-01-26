import { ProgramContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ScopeTree } from '../scope/scope.tree';

export class ProgramTree extends BaseTree {
    scopes: ScopeTree[];

    constructor(public ctx: ProgramContext) {
        super();
        this.scopes = ctx.scope()?.map(x => new ScopeTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            scopes: this.scopes.map(x => x.toPlain()),
        };
    }
}
