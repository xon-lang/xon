"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SyntaxError {
    constructor(tree, message) {
        this.tree = tree;
        this.message = message;
        throw `Syntax error: at ${tree._start.line}:${tree._start.charPositionInLine}\n` + message;
    }
}
exports.SyntaxError = SyntaxError;
//# sourceMappingURL=syntax-error.js.map