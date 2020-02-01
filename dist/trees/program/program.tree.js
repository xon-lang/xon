"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_tree_1 = require("../base.tree");
const scope_tree_1 = require("../scope/scope.tree");
class ProgramTree extends base_tree_1.BaseTree {
    constructor(ctx) {
        var _a;
        super();
        this.ctx = ctx;
        this.scopes = (_a = ctx.scope()) === null || _a === void 0 ? void 0 : _a.map(x => new scope_tree_1.ScopeTree(x));
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { scopes: this.scopes.map(x => x.toPlain()) });
    }
}
exports.ProgramTree = ProgramTree;
//# sourceMappingURL=program.tree.js.map