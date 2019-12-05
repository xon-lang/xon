import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from '../grammar/.antlr/XonLexer';
import { XonParser } from '../grammar/.antlr/XonParser';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { getExpressionTree } from '../trees/expression/expression-helper';
import { getStatementTree } from '../trees/statement/statement-helper';
import { ExpressionTree } from '../trees/expression/expression.tree';

export function parse(code: string) {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new XonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new XonParser(tokenStream);
    return parser;
}

export function parseExpression(code: string): ExpressionTree {
    return getExpressionTree(parse(code).expression());
}

export function parseStatement(code: string) {
    return getStatementTree(parse(code).statement());
}

export function parseCode<T>(code: string, type: new (ctx) => T) {
    const parser = parse(code);
    if (type.name.endsWith('ExpressionTree')) {
        return new type(parser.expression());
    }
    if (type.name.endsWith('StatementTree')) {
        return new type(parser.statement());
    }
    const methodName = camelCase(type.name.replace(/Tree$/g, ''));
    return new type(parser[methodName]());
}

export function parseFile<T>(filePath: string, type: new (ctx) => T) {
    const code = fs.readFileSync(filePath, 'utf8');
    return parseCode(code, type);
}

export function parseWrongCode<T>(code: string, type: new (ctx) => T) {
    expect.assertions(1);
    try {
        parseCode(code, type);
    } catch (e) {
        expect(e.message).not.toBeNull();
    }
}
