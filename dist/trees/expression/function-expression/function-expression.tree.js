"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class FunctionExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.arguments = ctx._args.map(expression_helper_1.getExpressionTree);
        this.object = expression_helper_1.getExpressionTree(ctx._object);
    }
    toPlain() {
        return Object.assign({}, super.toPlain());
    }
}
exports.FunctionExpressionTree = FunctionExpressionTree;
//# sourceMappingURL=function-expression.tree.js.map