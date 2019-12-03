import { ModuleContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class ModuleTree extends BaseTree {
    constructor(public ctx: ModuleContext) {
        super();
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
