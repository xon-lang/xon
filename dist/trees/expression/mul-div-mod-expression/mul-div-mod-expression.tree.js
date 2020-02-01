"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class MulDivModExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
        this.isMul = !!ctx.Multiply();
        this.isDiv = !!ctx.Divide();
        this.isMod = !!ctx.Modulus();
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { left: this.left.toPlain(), right: this.right.toPlain(), isMul: this.isMul, isDiv: this.isDiv, isMod: this.isMod });
    }
}
exports.MulDivModExpressionTree = MulDivModExpressionTree;
//# sourceMappingURL=mul-div-mod-expression.tree.js.map