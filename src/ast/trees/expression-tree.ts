import {
    ExpressionContext,
    LiteralExpressionContext,
    AddExpressionContext,
    VariableExpressionContext,
    FunctionCallExpressionContext,
} from '../../grammar/generated/AsmParser';
import { LiteralExpressionTree, LiteralType } from './expressions/literal-expression-tree';
import { AddExpressionTree } from './expressions/add-expression-tree';
import { VariableExpressionTree } from './expressions/variable-expression-tree';
import { FunctionCallExpressionTree } from './expressions/function-call-expression-tree';

export enum ExpressionType {
    Literal,
    Add,
    Variable,
    FunctionCall,
}

export class ExpressionTree {
    type: ExpressionType;
    literalExpression: LiteralExpressionTree;
    addExpression: AddExpressionTree;
    variableExpression: VariableExpressionTree;
    functionCallExpression: FunctionCallExpressionTree;

    constructor(public ctx: ExpressionContext) {
        if (ctx instanceof LiteralExpressionContext) {
            this.type = ExpressionType.Literal;
            this.literalExpression = new LiteralExpressionTree(ctx);
        }
        if (ctx instanceof AddExpressionContext) {
            this.type = ExpressionType.Add;
            this.addExpression = new AddExpressionTree(ctx);
        }
        if (ctx instanceof VariableExpressionContext) {
            this.type = ExpressionType.Variable;
            this.variableExpression = new VariableExpressionTree(ctx);
        }
        if (ctx instanceof FunctionCallExpressionContext) {
            this.type = ExpressionType.FunctionCall;
            this.functionCallExpression = new FunctionCallExpressionTree(ctx);
        }
    }

    toPlane() {
        return {
            type: ExpressionType[this.type],
            value: this.ctx.text,
        };
    }
}
