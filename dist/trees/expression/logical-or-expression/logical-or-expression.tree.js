"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../expression-helper");
const expression_tree_1 = require("../expression.tree");
class LogicalOrExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { left: this.left.toPlain(), right: this.right.toPlain() });
    }
}
exports.LogicalOrExpressionTree = LogicalOrExpressionTree;
//# sourceMappingURL=logical-or-expression.tree.js.map