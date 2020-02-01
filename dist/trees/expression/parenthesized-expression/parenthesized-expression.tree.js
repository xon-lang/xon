"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class ParenthesizedExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = expression_helper_1.getExpressionTree(ctx.expression());
    }
    toPlain() {
        return this.value.toPlain();
    }
}
exports.ParenthesizedExpressionTree = ParenthesizedExpressionTree;
//# sourceMappingURL=parenthesized-expression.tree.js.map