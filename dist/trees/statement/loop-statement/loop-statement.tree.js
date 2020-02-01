"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statement_tree_1 = require("../../statement/statement.tree");
const statement_helper_1 = require("../../statement/statement-helper");
const expression_helper_1 = require("../../expression/expression-helper");
class LoopStatementTree extends statement_tree_1.StatementTree {
    constructor(ctx) {
        var _a, _b, _c;
        super();
        this.ctx = ctx;
        this.infinity = !ctx.expression();
        this.indexName = (_a = ctx._index) === null || _a === void 0 ? void 0 : _a.text;
        this.keyName = (_b = ctx._key) === null || _b === void 0 ? void 0 : _b.text;
        this.valueName = (_c = ctx._value) === null || _c === void 0 ? void 0 : _c.text;
        this.expression = ctx.expression() && expression_helper_1.getExpressionTree(ctx.expression());
        this.statements = ctx.statement().map(statement_helper_1.getStatementTree);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { infinity: this.infinity, indexName: this.indexName, keyName: this.keyName, valueName: this.valueName, expression: this.expression.toPlain(), statements: this.statements.map(x => x.toPlain()) });
    }
}
exports.LoopStatementTree = LoopStatementTree;
//# sourceMappingURL=loop-statement.tree.js.map