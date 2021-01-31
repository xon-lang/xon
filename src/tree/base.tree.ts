import { ParserRuleContext } from 'antlr4ts';

function treeToPlain(object) {
    const treeType = object.constructor.name.replace(/Tree$/, '');
    const plain = treeType ? { treeType } : {};

    for (const key in object) {
        const value = object[key];

        if (typeof value === 'function' || value === null || value === undefined || key === 'ctx') {
            continue;
        }

        if (Array.isArray(value)) {
            plain[key] = value.map(treeToPlain);
        } else if (typeof value === 'object' || value instanceof BaseTree) {
            plain[key] = treeToPlain(value);
        } else {
            plain[key] = value;
        }
    }

    return plain;
}

export abstract class BaseTree {
    ctx?: ParserRuleContext;

    toPlain(): unknown {
        return treeToPlain(this);
    }

    toJson(): string {
        return JSON.stringify(this.toPlain(), null, 2);
    }
}
