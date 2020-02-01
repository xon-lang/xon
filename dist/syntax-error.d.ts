import { ParserRuleContext } from 'antlr4ts';
export declare class SyntaxError {
    tree: ParserRuleContext;
    message: string;
    constructor(tree: ParserRuleContext, message: string);
}
