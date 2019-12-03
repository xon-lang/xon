import { ParserRuleContext } from 'antlr4ts';

export abstract class BaseParser {
    ctx: ParserRuleContext;

    get type() {
        return this.ctx.constructor.name.replace(/Context$/, '');
    }

    toPlain() {
        return {
            type: this.type,
        };
    }

    toJson() {
        return JSON.stringify(this.toPlain(), null, 2);
    }

    toHighlightJson() {
        return this.toJson()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(
                /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
                function(match) {
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
