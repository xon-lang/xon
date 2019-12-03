import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from '../grammar/.antlr/XonLexer';
import { XonParser } from '../grammar/.antlr/XonParser';
import { camelCase } from 'lodash';
import * as fs from 'fs';

export function parseCode<T>(code: string, type: new (ctx) => T) {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new XonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new XonParser(tokenStream);

    if (type.name.endsWith('ExpressionTree')) {
        return new type(parser.expression());
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
        expect(e.message).toBe('The specified token does not exist');
    }
}
