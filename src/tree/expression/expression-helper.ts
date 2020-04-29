import {
    AddSubExpressionContext,
    ArrayExpressionContext,
    BitAndExpressionContext,
    BitNotExpressionContext,
    BitOrExpressionContext,
    BitShiftExpressionContext,
    BitXorExpressionContext,
    EqualityExpressionContext,
    ExpressionContext,
    FunctionExpressionContext,
    IdExpressionContext,
    IfExpressionContext,
    IndexExpressionContext,
    InstanceMemberExpressionContext,
    LambdaExpressionContext,
    LiteralExpressionContext,
    LogicalAndExpressionContext,
    LogicalNotExpressionContext,
    LogicalOrExpressionContext,
    LoopExpressionContext,
    MemberExpressionContext,
    MulDivModExpressionContext,
    ParenthesizedExpressionContext,
    PipeExpressionContext,
    PowExpressionContext,
    RangeExpressionContext,
    RelationalExpressionContext,
    SelectExpressionContext,
    SliceExpressionContext,
    SpreadExpressionContext,
    StringFormatExpressionContext,
    UnaryMinusExpressionContext,
    UnaryPlusExpressionContext,
} from '../../grammar/xon-parser';
import { AddSubExpressionTree } from './add-sub-expression/add-sub-expression.tree';
import { ArrayExpressionTree } from './array-expression/array-expression.tree';
import { BitAndExpressionTree } from './bit-and-expression/bit-and-expression.tree';
import { BitNotExpressionTree } from './bit-not-expression/bit-not-expression.tree';
import { BitOrExpressionTree } from './bit-or-expression/bit-or-expression.tree';
import { BitShiftExpressionTree } from './bit-shift-expression/bit-shift-expression.tree';
import { BitXorExpressionTree } from './bit-xor-expression/bit-xor-expression.tree';
import { EqualityExpressionTree } from './equality-expression/equality-expression.tree';
import { FunctionExpressionTree } from './function-expression/function-expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IfExpressionTree } from './if-expression/if-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { InstanceMemberExpressionTree } from './instance-member-expression/instance-member-expression.tree';
import { LambdaExpressionTree } from './lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from './literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from './logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './logical-or-expression/logical-or-expression.tree';
import { LoopExpressionTree } from './loop-expression/loop-expression.tree';
import { MemberExpressionTree } from './member-expression/member-expression.tree';
import { MulDivModExpressionTree } from './mul-div-mod-expression/mul-div-mod-expression.tree';
import { PipeExpressionTree } from './pipe-expression/pipe-expression.tree';
import { PowExpressionTree } from './pow-expression/pow-expression.tree';
import { RangeExpressionTree } from './range-expression/range-expression.tree';
import { RelationalExpressionTree } from './relational-expression/relational-expression.tree';
import { SelectExpressionTree } from './select-expression/select-expression.tree';
import { SliceExpressionTree } from './slice-expression/slice-expression.tree';
import { SpreadExpressionTree } from './spread-expression/spread-expression.tree';
import { StringFormatExpressionTree } from './string-format-expression/string-format-expression.tree';
import { UnaryMinusExpressionTree } from './unary-minus-expression/unary-minus-expression.tree';
import { UnaryPlusExpressionTree } from './unary-plus-expression/unary-plus-expression.tree';

export function getExpressionTree(ctx: ExpressionContext) {
    if (ctx === undefined) return undefined;

    // IdExpression
    if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
    // ParenthesizedExpression
    else if (ctx instanceof ParenthesizedExpressionContext)
        return getExpressionTree(ctx.expression());
    // LiteralExpression
    else if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
    // ArrayExpression
    else if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
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
    // MemberExpression
    else if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
    // InstanceMemberExpression
    else if (ctx instanceof InstanceMemberExpressionContext)
        return new InstanceMemberExpressionTree(ctx);
    // Function
    else if (ctx instanceof FunctionExpressionContext) return new FunctionExpressionTree(ctx);
    // BitShift
    else if (ctx instanceof BitShiftExpressionContext) return new BitShiftExpressionTree(ctx);
    // BitAnd
    else if (ctx instanceof BitAndExpressionContext) return new BitAndExpressionTree(ctx);
    // BitXor
    else if (ctx instanceof BitXorExpressionContext) return new BitXorExpressionTree(ctx);
    // BitOr
    else if (ctx instanceof BitOrExpressionContext) return new BitOrExpressionTree(ctx);
    // LogicalAnd
    else if (ctx instanceof LogicalAndExpressionContext) return new LogicalAndExpressionTree(ctx);
    // LogicalOr
    else if (ctx instanceof LogicalOrExpressionContext) return new LogicalOrExpressionTree(ctx);
    // Pipe
    else if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);
    // Relational
    else if (ctx instanceof RelationalExpressionContext) return new RelationalExpressionTree(ctx);
    // Equality
    else if (ctx instanceof EqualityExpressionContext) return new EqualityExpressionTree(ctx);
    // Lambda
    else if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
    // StringFormat
    else if (ctx instanceof StringFormatExpressionContext)
        return new StringFormatExpressionTree(ctx);
    // If
    else if (ctx instanceof IfExpressionContext) return new IfExpressionTree(ctx);
    // Loop
    else if (ctx instanceof LoopExpressionContext) return new LoopExpressionTree(ctx);
    // Select
    else if (ctx instanceof SelectExpressionContext) return new SelectExpressionTree(ctx);
    // Spread
    else if (ctx instanceof SpreadExpressionContext) return new SpreadExpressionTree(ctx);

    throw Error('No Expression found for ' + ctx?.constructor?.name);
}
