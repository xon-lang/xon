"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class PowExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.base = expression_helper_1.getExpressionTree(ctx._base);
        this.exponent = expression_helper_1.getExpressionTree(ctx._exponent);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { base: this.base.toPlain(), exponent: this.exponent.toPlain() });
    }
}
exports.PowExpressionTree = PowExpressionTree;
//# sourceMappingURL=pow-expression.tree.js.map