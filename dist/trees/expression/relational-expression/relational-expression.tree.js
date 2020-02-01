"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class RelationalExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
        this.isLessThan = !!ctx.LessThan();
        this.isLessThanEquals = !!ctx.LessThanEquals();
        this.isMoreThan = !!ctx.MoreThan();
        this.isMoreThanEquals = !!ctx.MoreThanEquals();
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { left: this.left.toPlain(), right: this.right.toPlain(), isLessThan: this.isLessThan, isLessThanEquals: this.isLessThanEquals, isMoreThan: this.isMoreThan, isGreaterThanEquals: this.isMoreThanEquals });
    }
}
exports.RelationalExpressionTree = RelationalExpressionTree;
//# sourceMappingURL=relational-expression.tree.js.map