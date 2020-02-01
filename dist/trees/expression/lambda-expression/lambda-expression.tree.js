"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../expression-helper");
const expression_tree_1 = require("../expression.tree");
class LambdaExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.args = ctx.ID().map(x => x.text);
        this.body = expression_helper_1.getExpressionTree(ctx.expression());
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { args: this.args, body: this.body.toPlain() });
    }
}
exports.LambdaExpressionTree = LambdaExpressionTree;
//# sourceMappingURL=lambda-expression.tree.js.map