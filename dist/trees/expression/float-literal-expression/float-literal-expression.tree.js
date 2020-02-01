"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class FloatLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = ctx.FloatLiteral().text.replace(/_/g, '');
    }
    toPlain() {
        return {
            type: 'FloatLiteralExpression',
            value: this.value,
        };
    }
}
exports.FloatLiteralExpressionTree = FloatLiteralExpressionTree;
//# sourceMappingURL=float-literal-expression.tree.js.map