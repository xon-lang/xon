"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class BooleanLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = ctx.BooleanLiteral().text;
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value });
    }
}
exports.BooleanLiteralExpressionTree = BooleanLiteralExpressionTree;
//# sourceMappingURL=boolean-literal-expression.tree.js.map