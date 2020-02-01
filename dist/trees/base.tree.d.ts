import { ParserRuleContext } from 'antlr4ts';
export declare abstract class BaseTree {
    ctx: ParserRuleContext;
    get type(): string;
    toPlain(): {
        type: string;
    };
    toJson(): string;
    toHighlightJson(): string;
}
