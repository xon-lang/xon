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
} from '../../grammar/.antlr/XonParser';
import { BaseParser } from '../base.parser';
import { UnaryExpressionParser } from '../unary-expression/unary-expression.parser';
import { IntegerLiteralParser } from '../integer-literal/integer-literal.parser';
import { FloatLiteralParser } from '../float-literal/float-literal.parser';
import { BooleanLiteralParser } from '../boolean-literal/boolean-literal.parser';
import { StringLiteralParser } from '../string-literal/string-literal.parser';
import { CharacterLiteralParser } from '../character-literal/character-literal.parser';
import { ParenthesizedExpressionParser } from '../parenthesized-expression/parenthesized-expression.parser';
import { IdExpressionParser } from '../id-expression/id-expression.parser';
import { MultiplicationExpressionParser } from '../multiplication-expression/multiplication-expression.parser';
import { AddExpressionParser } from '../add-expression/add-expression.parser';
import { DivideExpressionParser } from '../divide-expression/divide-expression.parser';
import { SubtractionExpressionParser } from '../subtraction-expression/subtraction-expression.parser';

export class ExpressionParser extends BaseParser {
    value: BaseParser;

    constructor(public ctx: ExpressionContext) {
        super();
        // literals
        if (ctx instanceof IdExpressionContext) this.value = new IdExpressionParser(ctx);
        else if (ctx instanceof ParenthesizedExpressionContext)
            this.value = new ParenthesizedExpressionParser(ctx);
        else if (ctx instanceof IntegerLiteralExpressionContext)
            this.value = new IntegerLiteralParser(ctx.integerLiteral());
        else if (ctx instanceof FloatLiteralExpressionContext)
            this.value = new FloatLiteralParser(ctx.floatLiteral());
        else if (ctx instanceof BooleanLiteralExpressionContext)
            this.value = new BooleanLiteralParser(ctx.booleanLiteral());
        else if (ctx instanceof CharacterLiteralExpressionContext)
            this.value = new CharacterLiteralParser(ctx.characterLiteral());
        else if (ctx instanceof StringLiteralExpressionContext)
            this.value = new StringLiteralParser(ctx.stringLiteral());
        // else if (ctx instanceof BinaryExpressionContext)
        //     this.value = new BinaryExpressionParser(ctx);
        else if (ctx instanceof MultiplicationExpressionContext)
            this.value = new MultiplicationExpressionParser(ctx);
        else if (ctx instanceof DivideExpressionContext)
            this.value = new DivideExpressionParser(ctx);
        else if (ctx instanceof AddExpressionContext) this.value = new AddExpressionParser(ctx);
        else if (ctx instanceof SubtractionExpressionContext)
            this.value = new SubtractionExpressionParser(ctx);
        else if (ctx instanceof UnaryExpressionContext) this.value = new UnaryExpressionParser(ctx);
    }

    toPlain() {
        return this.value.toPlain();
    }
}
