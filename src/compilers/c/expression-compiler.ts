import { ExpressionTree } from './../../ast/trees/expression-tree';
import { LiteralExpressionTree, LiteralType } from './../../ast/trees/expressions/literal-expression-tree';
import { AddExpressionTree } from './../../ast/trees/expressions/add-expression-tree';
import { getLiteralType } from './_lib';

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
        if (expr.type == LiteralType.String) {
            return `L"${expr.ctx.text.slice(1, -1)}\\n"`;
        }
        return expr.data.join('');
    }

    compileAdd(expr: AddExpressionTree) {
        return new ExpressionCompiler(expr.left).compile() + ' + ' + new ExpressionCompiler(expr.right).compile();
    }

    getType(tree: ExpressionTree = this.tree): string {
        if (tree.literalExpression) {
            return getLiteralType(tree.literalExpression);
        }
        if (tree.addExpression) {
            const leftType = this.getType(tree.addExpression.left);
            const rightType = this.getType(tree.addExpression.right);
            return this.getTheMostType(leftType, rightType);
        }
        if (tree.variableExpression) {
            return 'int';
        }
        return 'UndefinedExpressionType';
    }

    getTheMostType(...types: string[]) {
        if (types.some(x => x === 'wchar_t *')) return 'wchar_t *';
        if (types.some(x => x === 'double')) return 'double';
        if (types.some(x => x === 'int')) return 'int';
        if (types.some(x => x === 'bool')) return 'int';
        return 'UndefinedMostExpressionType';
    }
}
