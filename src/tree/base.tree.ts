import { ParserRuleContext } from 'antlr4ts';

export abstract class BaseTree {
    ctx?: ParserRuleContext;

    toPlain() {
        return {
            treeType: this.constructor.name.replace(/Tree$/, ''),
        };
    }

    toJson() {
        return JSON.stringify(this.toPlain(), null, 2);
    }
}
