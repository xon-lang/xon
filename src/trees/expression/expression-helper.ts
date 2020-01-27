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
    MulDivExpressionContext,
    AddSubExpressionContext,
    PropertyExpressionContext,
    FunctionCallExpressionContext,
    ArrayLiteralExpressionContext,
    RangeExpressionContext,
    SliceExpressionContext,
    IndexExpressionContext,
    PowExpressionContext,
} from './../../grammar/.antlr/XonParser';
import { UnaryExpressionTree } from './unary-expression/unary-expression.tree';
import { IntegerLiteralExpressionTree } from './integer-literal-expression/integer-literal-expression.tree';
import { FloatLiteralExpressionTree } from './float-literal-expression/float-literal-expression.tree';
import { BooleanLiteralExpressionTree } from './boolean-literal-expression/boolean-literal-expression.tree';
import { StringLiteralExpressionTree } from './string-literal-expression/string-literal-expression.tree';
import { CharacterLiteralExpressionTree } from './character-literal-expression/character-literal-expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { MulDivExpressionTree } from './mul-div-expression/mul-div-expression.tree';
import { AddSubExpressionTree } from './add-sub-expression/add-sub-expression.tree';
import { PropertyExpressionTree } from './property-expression/property-expression.tree';
import { FunctionCallExpressionTree } from './function-call-expression/function-call-expression.tree';
import { ArrayLiteralExpressionTree } from './array-literal-expression/array-literal-expression.tree';
import { SliceExpressionTree } from './slice-expression/slice-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { RangeExpressionTree } from './range-expression/range-expression.tree';
import { PowExpressionTree } from './pow-expression/pow-expression.tree';

export function getExpressionTree(ctx: ExpressionContext) {
    // IdExpression
    if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
    // ParenthesizedExpression
    else if (ctx instanceof ParenthesizedExpressionContext)
        return getExpressionTree(ctx.expression());
    // IntegerLiteralExpression
    else if (ctx instanceof IntegerLiteralExpressionContext)
        return new IntegerLiteralExpressionTree(ctx);
    // FloatLiteralExpression
    else if (ctx instanceof FloatLiteralExpressionContext)
        return new FloatLiteralExpressionTree(ctx);
    // BooleanLiteralExpression
    else if (ctx instanceof BooleanLiteralExpressionContext)
        return new BooleanLiteralExpressionTree(ctx);
    // CharacterLiteralExpression
    else if (ctx instanceof CharacterLiteralExpressionContext)
        return new CharacterLiteralExpressionTree(ctx);
    // StringLiteralExpression
    else if (ctx instanceof StringLiteralExpressionContext)
        return new StringLiteralExpressionTree(ctx);
    // ArrayLiteralExpression
    else if (ctx instanceof ArrayLiteralExpressionContext)
        return new ArrayLiteralExpressionTree(ctx);
    // RangeExpression
    else if (ctx instanceof RangeExpressionContext) return new RangeExpressionTree(ctx);
    // SliceExpression
    else if (ctx instanceof SliceExpressionContext) return new SliceExpressionTree(ctx);
    // IndexExpression
    else if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
    // MulDivExpression
    else if (ctx instanceof MulDivExpressionContext) return new MulDivExpressionTree(ctx);
    // AddSubExpression
    else if (ctx instanceof AddSubExpressionContext) return new AddSubExpressionTree(ctx);
    // PowExpression
    else if (ctx instanceof PowExpressionContext) return new PowExpressionTree(ctx);
    // UnaryExpression
    else if (ctx instanceof UnaryExpressionContext) return new UnaryExpressionTree(ctx);
    // PropertyExpression
    else if (ctx instanceof PropertyExpressionContext) return new PropertyExpressionTree(ctx);
    else if (ctx instanceof FunctionCallExpressionContext)
        return new FunctionCallExpressionTree(ctx);
}
