"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class CharacterLiteralExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = ctx.CharacterLiteral().text.slice(1, -1);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value });
    }
}
exports.CharacterLiteralExpressionTree = CharacterLiteralExpressionTree;
//# sourceMappingURL=character-literal-expression.tree.js.map