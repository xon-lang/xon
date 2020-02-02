import { AddSubExpressionContext, ArrayLiteralExpressionContext, BitAndExpressionContext, BitNotExpressionContext, BitOrExpressionContext, BitShiftExpressionContext, BitXorExpressionContext, BooleanLiteralExpressionContext, CharacterLiteralExpressionContext, ExpressionContext, FloatLiteralExpressionContext, FunctionExpressionContext, IdExpressionContext, IndexExpressionContext, IntegerLiteralExpressionContext, LogicalAndExpressionContext, LogicalNotExpressionContext, LogicalOrExpressionContext, MemberExpressionContext, MulDivModExpressionContext, ParenthesizedExpressionContext, PipeExpressionContext, PowExpressionContext, RangeExpressionContext, SliceExpressionContext, StringLiteralExpressionContext, UnaryMinusExpressionContext, UnaryPlusExpressionContext } from './../../grammar/xon-parser';
import { AddSubExpressionTree } from './add-sub-expression/add-sub-expression.tree';
import { ArrayLiteralExpressionTree } from './array-literal-expression/array-literal-expression.tree';
import { BitAndExpressionTree } from './bit-and-expression/bit-and-expression.tree';
import { BitNotExpressionTree } from './bit-not-expression/bit-not-expression.tree';
import { BitOrExpressionTree } from './bit-or-expression/bit-or-expression.tree';
import { BitShiftExpressionTree } from './bit-shift-expression/bit-shift-expression.tree';
import { BitXorExpressionTree } from './bit-xor-expression/bit-xor-expression.tree';
import { BooleanLiteralExpressionTree } from './boolean-literal-expression/boolean-literal-expression.tree';
import { CharacterLiteralExpressionTree } from './character-literal-expression/character-literal-expression.tree';
import { FloatLiteralExpressionTree } from './float-literal-expression/float-literal-expression.tree';
import { FunctionExpressionTree } from './function-expression/function-expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { IntegerLiteralExpressionTree } from './integer-literal-expression/integer-literal-expression.tree';
import { LogicalAndExpressionTree } from './logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './logical-or-expression/logical-or-expression.tree';
import { MemberExpressionTree } from './member-expression/member-expression.tree';
import { MulDivModExpressionTree } from './mul-div-mod-expression/mul-div-mod-expression.tree';
import { PipeExpressionTree } from './pipe-expression/pipe-expression.tree';
import { PowExpressionTree } from './pow-expression/pow-expression.tree';
import { RangeExpressionTree } from './range-expression/range-expression.tree';
import { SliceExpressionTree } from './slice-expression/slice-expression.tree';
import { StringLiteralExpressionTree } from './string-literal-expression/string-literal-expression.tree';
import { UnaryMinusExpressionTree } from './unary-minus-expression/unary-minus-expression.tree';
import { UnaryPlusExpressionTree } from './unary-plus-expression/unary-plus-expression.tree';

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
    // MulDivModExpression
    else if (ctx instanceof MulDivModExpressionContext) return new MulDivModExpressionTree(ctx);
    // AddSubExpression
    else if (ctx instanceof AddSubExpressionContext) return new AddSubExpressionTree(ctx);
    // PowExpression
    else if (ctx instanceof PowExpressionContext) return new PowExpressionTree(ctx);
    // UnaryPlusExpression
    else if (ctx instanceof UnaryPlusExpressionContext) return new UnaryPlusExpressionTree(ctx);
    // UnaryMinusExpression
    else if (ctx instanceof UnaryMinusExpressionContext) return new UnaryMinusExpressionTree(ctx);
    // LogicalNotExpression
    else if (ctx instanceof LogicalNotExpressionContext) return new LogicalNotExpressionTree(ctx);
    // BitNotExpression
    else if (ctx instanceof BitNotExpressionContext) return new BitNotExpressionTree(ctx);
    // PropertyExpression
    else if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
    // Function
    else if (ctx instanceof FunctionExpressionContext)
        return new FunctionExpressionTree(ctx);
    // BitShift
    else if (ctx instanceof BitShiftExpressionContext)
        return new BitShiftExpressionTree(ctx);
    // BitAnd
    else if (ctx instanceof BitAndExpressionContext)
        return new BitAndExpressionTree(ctx);
    // BitXor
    else if (ctx instanceof BitXorExpressionContext)
        return new BitXorExpressionTree(ctx);
    // BitOr
    else if (ctx instanceof BitOrExpressionContext)
        return new BitOrExpressionTree(ctx);
    // LogicalAnd
    else if (ctx instanceof LogicalAndExpressionContext)
        return new LogicalAndExpressionTree(ctx);
    // LogicalOr
    else if (ctx instanceof LogicalOrExpressionContext)
        return new LogicalOrExpressionTree(ctx);
    // Pipe
    else if (ctx instanceof PipeExpressionContext)
        return new PipeExpressionTree(ctx);
}
