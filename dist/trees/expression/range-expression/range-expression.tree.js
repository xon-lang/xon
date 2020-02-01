"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class RangeExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.start = expression_helper_1.getExpressionTree(ctx._startPos);
        this.end = expression_helper_1.getExpressionTree(ctx._end);
        this.step = ctx._step && expression_helper_1.getExpressionTree(ctx._step);
    }
    toPlain() {
        var _a;
        return Object.assign(Object.assign({}, super.toPlain()), { start: this.start.toPlain(), end: this.end.toPlain(), step: (_a = this.step) === null || _a === void 0 ? void 0 : _a.toPlain() });
    }
}
exports.RangeExpressionTree = RangeExpressionTree;
//# sourceMappingURL=range-expression.tree.js.map