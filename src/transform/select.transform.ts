import { IfStatementTree } from '../tree/statement/if-statement/if-statement.tree';
import { SelectStatementTree } from '../tree/statement/select-statement/select-expression.tree';
import { BaseTransform } from './base-transform';

export class SelectTransform extends BaseTransform {
    constructor(public tree: SelectStatementTree) {
        super();
    }

    transformToIf() {
        new IfStatementTree();
    }
}
