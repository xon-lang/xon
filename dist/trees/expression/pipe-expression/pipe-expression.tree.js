"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../expression-helper");
const expression_tree_1 = require("../expression.tree");
class PipeExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        var _a;
        super();
        this.ctx = ctx;
        this.arg = (_a = ctx.ID()) === null || _a === void 0 ? void 0 : _a.text;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { argName: this.arg, left: this.left.toPlain(), right: this.right.toPlain() });
    }
}
exports.PipeExpressionTree = PipeExpressionTree;
//# sourceMappingURL=pipe-expression.tree.js.map