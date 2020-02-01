"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statement_tree_1 = require("../statement.tree");
class PreprocessorStatementTree extends statement_tree_1.StatementTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    toPlain() {
        return Object.assign({}, super.toPlain());
    }
}
exports.PreprocessorStatementTree = PreprocessorStatementTree;
//# sourceMappingURL=preprocessor-statement.tree.js.map