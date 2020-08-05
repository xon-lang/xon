import { ParserRuleContext } from 'antlr4ts';
import { BaseTypes } from '../base-types';

export abstract class BaseTree {
    static locals = [];
    static defLocals = [];
    translator?: { translate(BaseTree): string };
    ctx?: ParserRuleContext;

    get locals() {
        return BaseTree.locals.slice(-1)[0];
    }

    get defLocals() {
        return BaseTree.defLocals.slice(-1)[0];
    }

    getIdType(id: string) {
        for (const locals of BaseTree.locals.reverse()) {
            if (id in locals) return locals;
        }

        return BaseTypes.Undefined;
    }

    get treeType() {
        return this.constructor.name.replace(/Tree$/, '');
    }

    log() {
        console.log(this.toJson());
    }

    toPlain() {
        return {
            treeType: this.treeType,
        };
    }

    toJson() {
        return JSON.stringify(this.toPlain(), null, 2);
    }

    translate() {
        return this.translator?.translate(this);
    }

    toHighlightJson() {
        return this.toJson()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(
                /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
                function (match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        cls = /:$/.test(match) ? 'key' : 'string';
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                }
            );

        // pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
        // .string { color: green; }
        // .number { color: darkorange; }
        // .boolean { color: blue; }
        // .null { color: magenta; }
        // .key { color: red; }
    }
}
