"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class ArrayLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.items = ctx._items.map(expression_helper_1.getExpressionTree);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { items: this.items.map(x => x.toPlain()) });
    }
}
exports.ArrayLiteralExpressionTree = ArrayLiteralExpressionTree;
//# sourceMappingURL=array-literal-expression.tree.js.map