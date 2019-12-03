import { ParserRuleContext } from 'antlr4ts';

export class SyntaxError {
    constructor(public tree: ParserRuleContext, public message: string) {
        throw `Syntax error: at ${tree._start.line}:${tree._start.charPositionInLine}\n` + message;
    }
}
