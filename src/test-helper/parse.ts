import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import * as fs from 'fs';
import * as path from 'path';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { getExpressionTree } from '../tree/expression/expression-helper';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { getStatementTree } from '../tree/statement/statement-helper';
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

export function parseCode<T>(code: string, type: new (ctx: ParserRuleContext) => T) {
    const parser = parse(code);
    if (type.name.endsWith('LiteralTree')) {
        return new type(parser.literal());
    }
    if (type.name.endsWith('ExpressionTree')) {
        return new type(parser.expression());
    }
    if (type.name.endsWith('StatementTree')) {
        return new type(parser.statement());
    }
    const methodName = camelize(type.name.replace(/Tree$/g, ''));

    if (methodName in parser) {
        return new type((parser as any)[methodName]());
    }

    throw 'No ' + methodName + ' for ' + type.name;
}

function camelize(str: string) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

export function parseFile<T>(filePath: string, type: new (ctx) => T) {
    const code = fs.readFileSync(filePath, 'utf8');
    return parseCode(code, type);
}

export function getTestCode() {
    const testFilePath = module.parent.parent.filename;
    const dir = path.dirname(testFilePath);
    const name = path.basename(testFilePath, '.ts');
    return fs.readFileSync(path.join(dir, name + '.xon')).toString();
}

export function testXonFIle<T>(type: new (ctx) => T, fn: (tree: T) => void) {
    const name = path.basename(module.parent.parent.filename, '.test.td');
    const code = getTestCode();
    const tree = parseCode(code, type);
    test(name, () => fn(tree));
}
