import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from '../grammar/.antlr/XonLexer';
import { XonParser } from '../grammar/.antlr/XonParser';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
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

export function getTestCode() {
    const testFilePath = module.parent.parent.filename;
    const dir = path.dirname(testFilePath);
    const name = path.basename(testFilePath, '.ts');
    return fs.readFileSync(path.join(dir, name + '.xon')).toString();
}

export function testXonFIle<T>( type: new (ctx) => T, fn: (tree: T) => void) {
    const name = path.basename(module.parent.parent.filename, '.test.td');
    const code = getTestCode();
    const tree = parseCode(code, type);
    test(name, () => fn(tree));
}
