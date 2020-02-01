"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_sub_expression_tree_1 = require("../trees/expression/add-sub-expression/add-sub-expression.tree");
const bit_and_expression_tree_1 = require("../trees/expression/bit-and-expression/bit-and-expression.tree");
const bit_not_expression_tree_1 = require("../trees/expression/bit-not-expression/bit-not-expression.tree");
const bit_or_expression_tree_1 = require("../trees/expression/bit-or-expression/bit-or-expression.tree");
const bit_shift_expression_tree_1 = require("../trees/expression/bit-shift-expression/bit-shift-expression.tree");
const bit_xor_expression_tree_1 = require("../trees/expression/bit-xor-expression/bit-xor-expression.tree");
const equality_expression_tree_1 = require("../trees/expression/equality-expression/equality-expression.tree");
const id_expression_tree_1 = require("../trees/expression/id-expression/id-expression.tree");
const integer_literal_expression_tree_1 = require("../trees/expression/integer-literal-expression/integer-literal-expression.tree");
const logical_and_expression_tree_1 = require("../trees/expression/logical-and-expression/logical-and-expression.tree");
const logical_not_expression_tree_1 = require("../trees/expression/logical-not-expression/logical-not-expression.tree");
const logical_or_expression_tree_1 = require("../trees/expression/logical-or-expression/logical-or-expression.tree");
const mul_div_mod_expression_tree_1 = require("../trees/expression/mul-div-mod-expression/mul-div-mod-expression.tree");
const pipe_expression_tree_1 = require("../trees/expression/pipe-expression/pipe-expression.tree");
const pow_expression_tree_1 = require("../trees/expression/pow-expression/pow-expression.tree");
const relational_expression_tree_1 = require("../trees/expression/relational-expression/relational-expression.tree");
const unary_minus_expression_tree_1 = require("../trees/expression/unary-minus-expression/unary-minus-expression.tree");
const unary_plus_expression_tree_1 = require("../trees/expression/unary-plus-expression/unary-plus-expression.tree");
const store = {};
function evalExpression(tree) {
    if (tree instanceof id_expression_tree_1.IdExpressionTree)
        return store[tree.id];
    if (tree instanceof integer_literal_expression_tree_1.IntegerLiteralExpressionTree)
        return +tree.value;
    if (tree instanceof unary_plus_expression_tree_1.UnaryPlusExpressionTree)
        return evalExpression(tree.value);
    if (tree instanceof unary_minus_expression_tree_1.UnaryMinusExpressionTree)
        return -evalExpression(tree.value);
    if (tree instanceof logical_not_expression_tree_1.LogicalNotExpressionTree)
        return !evalExpression(tree.value);
    if (tree instanceof bit_not_expression_tree_1.BitNotExpressionTree)
        return ~evalExpression(tree.value);
    if (tree instanceof pow_expression_tree_1.PowExpressionTree)
        return Math.pow(evalExpression(tree.base), evalExpression(tree.exponent));
    if (tree instanceof pipe_expression_tree_1.PipeExpressionTree) {
        const a = evalExpression(tree['left']);
        if (tree.arg)
            store[tree.arg] = a;
        return evalExpression(tree['right']);
    }
    const a = evalExpression(tree['left']);
    const b = evalExpression(tree['right']);
    if (tree instanceof mul_div_mod_expression_tree_1.MulDivModExpressionTree) {
        if (tree.isMul)
            return a * b;
        if (tree.isDiv)
            return a / b;
        if (tree.isMod)
            return a % b;
    }
    if (tree instanceof add_sub_expression_tree_1.AddSubExpressionTree)
        return tree.isPlus ? a + b : a - b;
    if (tree instanceof bit_shift_expression_tree_1.BitShiftExpressionTree) {
        if (tree.isLeftShiftArithmetic)
            return a << b;
        if (tree.isRightShiftArithmetic)
            return a >> b;
        if (tree.isRightShiftLogical)
            return a >>> b;
    }
    if (tree instanceof relational_expression_tree_1.RelationalExpressionTree) {
        if (tree.isLessThan)
            return a < b;
        if (tree.isLessThanEquals)
            return a <= b;
        if (tree.isMoreThan)
            return a > b;
        if (tree.isMoreThanEquals)
            return a >= b;
    }
    if (tree instanceof equality_expression_tree_1.EqualityExpressionTree) {
        if (tree.isEquals)
            return a === b;
        if (tree.isNotEquals)
            return a !== b;
    }
    if (tree instanceof bit_and_expression_tree_1.BitAndExpressionTree)
        return a & b;
    if (tree instanceof bit_xor_expression_tree_1.BitXorExpressionTree)
        return a ^ b;
    if (tree instanceof bit_or_expression_tree_1.BitOrExpressionTree)
        return a | b;
    if (tree instanceof logical_and_expression_tree_1.LogicalAndExpressionTree)
        return a && b;
    if (tree instanceof logical_or_expression_tree_1.LogicalOrExpressionTree)
        return a || b;
}
exports.evalExpression = evalExpression;
//# sourceMappingURL=eval.js.map