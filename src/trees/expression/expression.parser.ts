import {
    ExpressionContext,
    BinaryExpressionContext,
    UnaryExpressionContext,
    IntegerLiteralExpressionContext,
    FloatLiteralExpressionContext,
    BooleanLiteralExpressionContext,
    CharacterLiteralExpressionContext,
    StringLiteralExpressionContext,
    BracedExpressionContext,
    IdExpressionContext,
} from '../../grammar/.antlr/XonParser';
import { BaseParser } from '../base.parser';
import { BinaryExpressionParser } from '../binary-expression/binary-expression.parser';
import { UnaryExpressionParser } from '../unary-expression/unary-expression.parser';
import { IntegerLiteralParser } from '../integer-literal/integer-literal.parser';
import { FloatLiteralParser } from '../float-literal/float-literal.parser';
import { BooleanLiteralParser } from '../boolean-literal/boolean-literal.parser';
import { StringLiteralParser } from '../string-literal/string-literal.parser';
import { CharacterLiteralParser } from '../character-literal/character-literal.parser';
import { BracedExpressionParser } from '../braced-expression/braced-expression.parser';
import { IdExpressionParser } from '../id-expression/id-expression.parser';

export class ExpressionParser extends BaseParser {
    value: BaseParser;

    constructor(public ctx: ExpressionContext) {
        super();
        // literals
        if (ctx instanceof IdExpressionContext) this.value = new IdExpressionParser(ctx);
        else if (ctx instanceof BracedExpressionContext)
            this.value = new BracedExpressionParser(ctx);
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
        else if (ctx instanceof BinaryExpressionContext)
            this.value = new BinaryExpressionParser(ctx);
        else if (ctx instanceof UnaryExpressionContext) this.value = new UnaryExpressionParser(ctx);
    }

    toPlain() {
        return this.value.toPlain();
    }
}
