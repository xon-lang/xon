"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class IntegerLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value });
    }
}
exports.IntegerLiteralExpressionTree = IntegerLiteralExpressionTree;
//# sourceMappingURL=integer-literal-expression.tree.js.map