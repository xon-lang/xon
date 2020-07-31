import { ParserRuleContext } from 'antlr4ts';
import { Parser } from '../parser';
import { BaseTree } from '../tree/base.tree';
import { ExpressionTree } from '../tree/expression/expression.tree';

export function parse(code: string) {
    return new Parser().parse(code);
}

export function parseExpression(code: string): ExpressionTree {
    return new Parser().parseExpression(code);
}

export function parseStatement(code: string) {
    return new Parser().parseStatement(code);
}

export function parseCode<T extends BaseTree>(
    code: string,
    type: new (ctx: ParserRuleContext) => T
) {
    return new Parser().parseCode(code, type);
}

export function parseFile<T extends BaseTree>(filePath: string, type: new (ctx) => T) {
    return new Parser().parseFile(filePath, type);
}
