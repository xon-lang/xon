"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class AddSubExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
        this.isPlus = !!ctx.Plus();
        this.isMinus = !!ctx.Minus();
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { left: this.left.toPlain(), right: this.right.toPlain(), isAdd: this.isPlus, isMinus: this.isMinus });
    }
}
exports.AddSubExpressionTree = AddSubExpressionTree;
//# sourceMappingURL=add-sub-expression.tree.js.map