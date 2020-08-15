import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import * as fs from 'fs';
import path from 'path';
import { XonLexer } from './grammar/xon-lexer';
import { XonParser } from './grammar/xon-parser';
import { BaseTree } from './tree/base.tree';
import { getExpressionTree } from './tree/expression/expression-helper';
import { ExpressionTree } from './tree/expression/expression.tree';
import { getStatementTree } from './tree/statement/statement-helper';

export function parse(code: string) {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new XonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new XonParser(tokenStream);
    return parser;
}

export function parseExpression(code: string): ExpressionTree {
    const parser = this.parse(code);
    const ctx = parser.expression();
    return getExpressionTree(ctx);
}

export function parseStatement(code: string) {
    return getStatementTree(this.parse(code).statement());
}

export function parseCode<T extends BaseTree>(
    code: string,
    type: new (ctx: ParserRuleContext) => T
) {
    const parser = this.parse(code);
    if (type.name.endsWith('LiteralTree')) {
        return new type(parser.literal());
    }
    if (type.name.endsWith('ExpressionTree')) {
        return new type(parser.expression());
    }
    if (type.name.endsWith('StatementTree')) {
        return new type(parser.statement());
    }
    if (type.name.endsWith('DefinitionTree')) {
        return new type(parser.definition());
    }

    const methodName = camelize(type.name.replace(/Tree$/, ''));
    if (methodName in parser) {
        return new type((parser as any)[methodName]());
    }

    throw new Error('No ' + methodName + ' for ' + type.name);
}

export function parseFile<T extends BaseTree>(filePath: string, type: new (ctx) => T) {
    filePath = path.join(process.cwd(), 'src', filePath);
    const code = fs.readFileSync(filePath, 'utf8');
    return this.parseCode(code, type);
}

function camelize(str: string) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}
