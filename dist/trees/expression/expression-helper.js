"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XonParser_1 = require("./../../grammar/.antlr/XonParser");
const add_sub_expression_tree_1 = require("./add-sub-expression/add-sub-expression.tree");
const array_literal_expression_tree_1 = require("./array-literal-expression/array-literal-expression.tree");
const bit_and_expression_tree_1 = require("./bit-and-expression/bit-and-expression.tree");
const bit_not_expression_tree_1 = require("./bit-not-expression/bit-not-expression.tree");
const bit_or_expression_tree_1 = require("./bit-or-expression/bit-or-expression.tree");
const bit_shift_expression_tree_1 = require("./bit-shift-expression/bit-shift-expression.tree");
const bit_xor_expression_tree_1 = require("./bit-xor-expression/bit-xor-expression.tree");
const boolean_literal_expression_tree_1 = require("./boolean-literal-expression/boolean-literal-expression.tree");
const character_literal_expression_tree_1 = require("./character-literal-expression/character-literal-expression.tree");
const float_literal_expression_tree_1 = require("./float-literal-expression/float-literal-expression.tree");
const function_expression_tree_1 = require("./function-expression/function-expression.tree");
const id_expression_tree_1 = require("./id-expression/id-expression.tree");
const index_expression_tree_1 = require("./index-expression/index-expression.tree");
const integer_literal_expression_tree_1 = require("./integer-literal-expression/integer-literal-expression.tree");
const logical_and_expression_tree_1 = require("./logical-and-expression/logical-and-expression.tree");
const logical_not_expression_tree_1 = require("./logical-not-expression/logical-not-expression.tree");
const logical_or_expression_tree_1 = require("./logical-or-expression/logical-or-expression.tree");
const member_expression_tree_1 = require("./member-expression/member-expression.tree");
const mul_div_mod_expression_tree_1 = require("./mul-div-mod-expression/mul-div-mod-expression.tree");
const pipe_expression_tree_1 = require("./pipe-expression/pipe-expression.tree");
const pow_expression_tree_1 = require("./pow-expression/pow-expression.tree");
const range_expression_tree_1 = require("./range-expression/range-expression.tree");
const slice_expression_tree_1 = require("./slice-expression/slice-expression.tree");
const string_literal_expression_tree_1 = require("./string-literal-expression/string-literal-expression.tree");
const unary_minus_expression_tree_1 = require("./unary-minus-expression/unary-minus-expression.tree");
const unary_plus_expression_tree_1 = require("./unary-plus-expression/unary-plus-expression.tree");
function getExpressionTree(ctx) {
    // IdExpression
    if (ctx instanceof XonParser_1.IdExpressionContext)
        return new id_expression_tree_1.IdExpressionTree(ctx);
    // ParenthesizedExpression
    else if (ctx instanceof XonParser_1.ParenthesizedExpressionContext)
        return getExpressionTree(ctx.expression());
    // IntegerLiteralExpression
    else if (ctx instanceof XonParser_1.IntegerLiteralExpressionContext)
        return new integer_literal_expression_tree_1.IntegerLiteralExpressionTree(ctx);
    // FloatLiteralExpression
    else if (ctx instanceof XonParser_1.FloatLiteralExpressionContext)
        return new float_literal_expression_tree_1.FloatLiteralExpressionTree(ctx);
    // BooleanLiteralExpression
    else if (ctx instanceof XonParser_1.BooleanLiteralExpressionContext)
        return new boolean_literal_expression_tree_1.BooleanLiteralExpressionTree(ctx);
    // CharacterLiteralExpression
    else if (ctx instanceof XonParser_1.CharacterLiteralExpressionContext)
        return new character_literal_expression_tree_1.CharacterLiteralExpressionTree(ctx);
    // StringLiteralExpression
    else if (ctx instanceof XonParser_1.StringLiteralExpressionContext)
        return new string_literal_expression_tree_1.StringLiteralExpressionTree(ctx);
    // ArrayLiteralExpression
    else if (ctx instanceof XonParser_1.ArrayLiteralExpressionContext)
        return new array_literal_expression_tree_1.ArrayLiteralExpressionTree(ctx);
    // RangeExpression
    else if (ctx instanceof XonParser_1.RangeExpressionContext)
        return new range_expression_tree_1.RangeExpressionTree(ctx);
    // SliceExpression
    else if (ctx instanceof XonParser_1.SliceExpressionContext)
        return new slice_expression_tree_1.SliceExpressionTree(ctx);
    // IndexExpression
    else if (ctx instanceof XonParser_1.IndexExpressionContext)
        return new index_expression_tree_1.IndexExpressionTree(ctx);
    // MulDivModExpression
    else if (ctx instanceof XonParser_1.MulDivModExpressionContext)
        return new mul_div_mod_expression_tree_1.MulDivModExpressionTree(ctx);
    // AddSubExpression
    else if (ctx instanceof XonParser_1.AddSubExpressionContext)
        return new add_sub_expression_tree_1.AddSubExpressionTree(ctx);
    // PowExpression
    else if (ctx instanceof XonParser_1.PowExpressionContext)
        return new pow_expression_tree_1.PowExpressionTree(ctx);
    // UnaryPlusExpression
    else if (ctx instanceof XonParser_1.UnaryPlusExpressionContext)
        return new unary_plus_expression_tree_1.UnaryPlusExpressionTree(ctx);
    // UnaryMinusExpression
    else if (ctx instanceof XonParser_1.UnaryMinusExpressionContext)
        return new unary_minus_expression_tree_1.UnaryMinusExpressionTree(ctx);
    // LogicalNotExpression
    else if (ctx instanceof XonParser_1.LogicalNotExpressionContext)
        return new logical_not_expression_tree_1.LogicalNotExpressionTree(ctx);
    // BitNotExpression
    else if (ctx instanceof XonParser_1.BitNotExpressionContext)
        return new bit_not_expression_tree_1.BitNotExpressionTree(ctx);
    // PropertyExpression
    else if (ctx instanceof XonParser_1.MemberExpressionContext)
        return new member_expression_tree_1.MemberExpressionTree(ctx);
    // Function
    else if (ctx instanceof XonParser_1.FunctionExpressionContext)
        return new function_expression_tree_1.FunctionExpressionTree(ctx);
    // BitShift
    else if (ctx instanceof XonParser_1.BitShiftExpressionContext)
        return new bit_shift_expression_tree_1.BitShiftExpressionTree(ctx);
    // BitAnd
    else if (ctx instanceof XonParser_1.BitAndExpressionContext)
        return new bit_and_expression_tree_1.BitAndExpressionTree(ctx);
    // BitXor
    else if (ctx instanceof XonParser_1.BitXorExpressionContext)
        return new bit_xor_expression_tree_1.BitXorExpressionTree(ctx);
    // BitOr
    else if (ctx instanceof XonParser_1.BitOrExpressionContext)
        return new bit_or_expression_tree_1.BitOrExpressionTree(ctx);
    // LogicalAnd
    else if (ctx instanceof XonParser_1.LogicalAndExpressionContext)
        return new logical_and_expression_tree_1.LogicalAndExpressionTree(ctx);
    // LogicalOr
    else if (ctx instanceof XonParser_1.LogicalOrExpressionContext)
        return new logical_or_expression_tree_1.LogicalOrExpressionTree(ctx);
    // Pipe
    else if (ctx instanceof XonParser_1.PipeExpressionContext)
        return new pipe_expression_tree_1.PipeExpressionTree(ctx);
}
exports.getExpressionTree = getExpressionTree;
//# sourceMappingURL=expression-helper.js.map