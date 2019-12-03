import {
    ExpressionContext,
    UnaryExpressionContext,
    IntegerLiteralExpressionContext,
    FloatLiteralExpressionContext,
    BooleanLiteralExpressionContext,
    CharacterLiteralExpressionContext,
    StringLiteralExpressionContext,
    ParenthesizedExpressionContext,
    IdExpressionContext,
    MultiplicationExpressionContext,
    AddExpressionContext,
    DivideExpressionContext,
    SubtractionExpressionContext,
    PropertyExpressionContext,
} from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { UnaryExpressionTree } from '../unary-expression/unary-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';
import { FloatLiteralExpressionTree } from '../float-literal-expression/float-literal-expression.tree';
import { BooleanLiteralExpressionTree } from '../boolean-literal-expression/boolean-literal-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { CharacterLiteralExpressionTree } from '../character-literal-expression/character-literal-expression.tree';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { MultiplicationExpressionTree } from '../multiplication-expression/multiplication-expression.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { DivideExpressionTree } from '../divide-expression/divide-expression.tree';
import { SubtractionExpressionTree } from '../subtraction-expression/subtraction-expression.tree';
import { PropertyExpressionTree } from '../property-expression/property-expression.tree';

export class ExpressionTree extends BaseTree {
    value: BaseTree;

    constructor(public ctx: ExpressionContext) {
        super();
        // IdExpression
        if (ctx instanceof IdExpressionContext) this.value = new IdExpressionTree(ctx);
        // ParenthesizedExpression
        else if (ctx instanceof ParenthesizedExpressionContext)
            this.value = new ParenthesizedExpressionTree(ctx).value;
        // IntegerLiteralExpression
        else if (ctx instanceof IntegerLiteralExpressionContext)
            this.value = new IntegerLiteralExpressionTree(ctx);
        // FloatLiteralExpression
        else if (ctx instanceof FloatLiteralExpressionContext)
            this.value = new FloatLiteralExpressionTree(ctx);
        // BooleanLiteralExpression
        else if (ctx instanceof BooleanLiteralExpressionContext)
            this.value = new BooleanLiteralExpressionTree(ctx);
        // CharacterLiteralExpression
        else if (ctx instanceof CharacterLiteralExpressionContext)
            this.value = new CharacterLiteralExpressionTree(ctx);
        // StringLiteralExpression
        else if (ctx instanceof StringLiteralExpressionContext)
            this.value = new StringLiteralExpressionTree(ctx);
        // MultiplicationExpression
        else if (ctx instanceof MultiplicationExpressionContext)
            this.value = new MultiplicationExpressionTree(ctx);
        // DivideExpression
        else if (ctx instanceof DivideExpressionContext) this.value = new DivideExpressionTree(ctx);
        // AddExpression
        else if (ctx instanceof AddExpressionContext) this.value = new AddExpressionTree(ctx);
        // SubtractionExpress
        else if (ctx instanceof SubtractionExpressionContext)
            this.value = new SubtractionExpressionTree(ctx);
        // UnaryExpression
        else if (ctx instanceof UnaryExpressionContext) this.value = new UnaryExpressionTree(ctx);
        // PropertyExpression
        else if (ctx instanceof PropertyExpressionContext)
            this.value = new PropertyExpressionTree(ctx);
    }

    toPlain() {
        return this.value.toPlain();
    }
}
