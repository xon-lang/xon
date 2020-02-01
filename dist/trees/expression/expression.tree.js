"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_tree_1 = require("../base.tree");
class ExpressionTree extends base_tree_1.BaseTree {
    constructor() {
        super();
    }
    toString() {
        var _a;
        return (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.text;
    }
}
exports.ExpressionTree = ExpressionTree;
//# sourceMappingURL=expression.tree.js.map