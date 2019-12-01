import { AsmStatementContext } from '../../../grammar/generated/XonParser';

export class AsmStatementTree {
    code: string;

    constructor(public ctx: AsmStatementContext) {
        this.code = ctx.text.slice(3, -2);
    }

    toPlane() {
        return '';
    }
}
