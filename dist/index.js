"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const XonLexer_1 = require("./grammar/.antlr/XonLexer");
const XonParser_1 = require("./grammar/.antlr/XonParser");
const expression_helper_1 = require("./trees/expression/expression-helper");
const statement_helper_1 = require("./trees/statement/statement-helper");
__export(require("./test-helper"));
function parse(code) {
    const inputStream = new antlr4ts_1.ANTLRInputStream(code);
    const lexer = new XonLexer_1.XonLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new XonParser_1.XonParser(tokenStream);
    return parser;
}
exports.parse = parse;
function parseExpression(code) {
    return expression_helper_1.getExpressionTree(parse(code).expression());
}
exports.parseExpression = parseExpression;
function parseStatement(code) {
    return statement_helper_1.getStatementTree(parse(code).statement());
}
exports.parseStatement = parseStatement;
function parseCode(code, type) {
    const parser = parse(code);
    if (type.name.endsWith('ExpressionTree')) {
        return new type(parser.expression());
    }
    if (type.name.endsWith('StatementTree')) {
        return new type(parser.statement());
    }
    const methodName = camelize(type.name.replace(/Tree$/g, ''));
    return new type(parser[methodName]());
}
exports.parseCode = parseCode;
function camelize(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, '');
}
//# sourceMappingURL=index.js.map