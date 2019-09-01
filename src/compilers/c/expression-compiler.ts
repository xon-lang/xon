import { ExpressionTree } from './../../ast/trees/expression-tree';
import { LiteralExpressionTree } from './../../ast/trees/expressions/literal-expression-tree';
import { AddExpressionTree } from './../../ast/trees/expressions/add-expression-tree';

export class ExpressionCompiler {
    constructor(public tree: ExpressionTree) {}

    compile(): string {
        if (this.tree.literalExpression) {
            return this.compileLiteral(this.tree.literalExpression);
        }
        if (this.tree.addExpression) {
            return this.compileAdd(this.tree.addExpression);
        }
        if (this.tree.variableExpression) {
            return this.tree.variableExpression.name;
        }
        return 'UndefinedExpression';
    }

    compileLiteral(expr: LiteralExpressionTree) {
        if (expr.dataType.isString) {
            return `L"${expr.ctx.text.slice(1, -1)}\\n"`;
        }
        return expr.ctx.text;
    }

    compileAdd(expr: AddExpressionTree) {
        const left = new ExpressionCompiler(expr.left).compile();
        const right = new ExpressionCompiler(expr.right).compile();
        return left + ' + ' + right;
    }
}
