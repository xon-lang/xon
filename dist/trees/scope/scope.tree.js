"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../expression/expression-helper");
const base_tree_1 = require("../base.tree");
const statement_helper_1 = require("../statement/statement-helper");
class ScopeTree extends base_tree_1.BaseTree {
    constructor(ctx) {
        var _a;
        super();
        this.ctx = ctx;
        this.name = ctx.ID().text;
        this.args = ((_a = ctx.scopeArgument()) === null || _a === void 0 ? void 0 : _a.map(x => ({
            type: x._type.text,
            name: x._name.text,
            value: x.expression() && expression_helper_1.getExpressionTree(x.expression()),
        }))) || [];
        this.statements = ctx.statement().map(statement_helper_1.getStatementTree);
        this.scopes = ctx.scope().map(x => new ScopeTree(x));
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { name: this.name, args: this.args.map(x => {
                var _a;
                return ({
                    type: x.type,
                    name: x.name,
                    value: (_a = x.value) === null || _a === void 0 ? void 0 : _a.toPlain(),
                });
            }), statements: this.statements.map(x => x.toPlain()), scopes: this.scopes.map(x => x.toPlain()) });
    }
}
exports.ScopeTree = ScopeTree;
//# sourceMappingURL=scope.tree.js.map