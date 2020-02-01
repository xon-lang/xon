"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class StringLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = ctx.StringLiteral().text.slice(1, -1);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value });
    }
}
exports.StringLiteralExpressionTree = StringLiteralExpressionTree;
//# sourceMappingURL=string-literal-expression.tree.js.map