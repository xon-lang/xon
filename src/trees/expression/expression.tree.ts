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
import { IntegerLiteralTree } from '../integer-literal/integer-literal.tree';
import { FloatLiteralTree } from '../float-literal/float-literal.tree';
import { BooleanLiteralTree } from '../boolean-literal/boolean-literal.tree';
import { StringLiteralTree } from '../string-literal/string-literal.tree';
import { CharacterLiteralTree } from '../character-literal/character-literal.tree';
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
            this.value = new IntegerLiteralTree(ctx.integerLiteral());
        // FloatLiteralExpression
        else if (ctx instanceof FloatLiteralExpressionContext)
            this.value = new FloatLiteralTree(ctx.floatLiteral());
        // BooleanLiteralExpression
        else if (ctx instanceof BooleanLiteralExpressionContext)
            this.value = new BooleanLiteralTree(ctx.booleanLiteral());
        // CharacterLiteralExpression
        else if (ctx instanceof CharacterLiteralExpressionContext)
            this.value = new CharacterLiteralTree(ctx.characterLiteral());
        // StringLiteralExpression
        else if (ctx instanceof StringLiteralExpressionContext)
            this.value = new StringLiteralTree(ctx.stringLiteral());
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
