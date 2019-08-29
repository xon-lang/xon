import { ExpressionCompiler } from '../expression-compiler';
import { FunctionCallStatementTree } from '../../../ast/trees/statements/function-call-statement-tree';

export class FunctionCallStatementCompiler {
    constructor(public tree: FunctionCallStatementTree) {}

    compile() {
        const args = this.tree.arguments.map(x => new ExpressionCompiler(x).compile()).join(', ');
        return `${this.tree.name}(${args});`;
    }
}
