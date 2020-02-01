"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class IndexExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = expression_helper_1.getExpressionTree(ctx._value);
        this.index = expression_helper_1.getExpressionTree(ctx._index);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value.toPlain(), index: this.index.toPlain() });
    }
}
exports.IndexExpressionTree = IndexExpressionTree;
//# sourceMappingURL=index-expression.tree.js.map