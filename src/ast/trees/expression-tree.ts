import {
    ExpressionContext,
    LiteralExpressionContext,
    AddExpressionContext,
    VariableExpressionContext,
    FunctionCallExpressionContext,
} from '../../grammar/generated/XonParser';
import { LiteralExpressionTree } from './expressions/literal-expression-tree';
import { AddExpressionTree } from './expressions/add-expression-tree';
import { VariableExpressionTree } from './expressions/variable-expression-tree';
import { FunctionCallExpressionTree } from './expressions/function-call-expression-tree';
import { ExpressionTreeBase } from './expression-tree-base';

export enum ExpressionType {
    Literal,
    Add,
    Variable,
    FunctionCall,
}

export class ExpressionTree extends ExpressionTreeBase {
    expressionType: ExpressionType;
    literalExpression: LiteralExpressionTree;
    addExpression: AddExpressionTree;
    variableExpression: VariableExpressionTree;
    functionCallExpression: FunctionCallExpressionTree;

    constructor(public ctx: ExpressionContext) {
        super();
        if (ctx instanceof LiteralExpressionContext) {
            this.expressionType = ExpressionType.Literal;
            this.literalExpression = new LiteralExpressionTree(ctx);
            this.dataType = this.literalExpression.dataType;
        }
        if (ctx instanceof AddExpressionContext) {
            this.expressionType = ExpressionType.Add;
            this.addExpression = new AddExpressionTree(ctx);
            this.dataType = this.addExpression.dataType;
            this.dataTypeDependsOn = this.addExpression.dataTypeDependsOn;
        }
        if (ctx instanceof VariableExpressionContext) {
            this.expressionType = ExpressionType.Variable;
            this.variableExpression = new VariableExpressionTree(ctx);
            this.dataTypeDependsOn = [this.variableExpression.name];
        }
        if (ctx instanceof FunctionCallExpressionContext) {
            this.expressionType = ExpressionType.FunctionCall;
            this.functionCallExpression = new FunctionCallExpressionTree(ctx);
        }
    }

    toPlane() {
        return {
            type: ExpressionType[this.expressionType],
            value: this.ctx.text,
        };
    }
}
