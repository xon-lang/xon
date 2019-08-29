import { LiteralExpressionTree, LiteralType } from '../../ast/trees/expressions/literal-expression-tree';
import { newLine, tabSpace } from './../../util';

export function getLiteralType(tree: LiteralExpressionTree) {
    switch (tree.type) {
        case LiteralType.Boolean:
            return 'bool';
        case LiteralType.Decimal:
            return tree.ctx
                .literal()
                .DecimalLiteral()
                .text.includes('.')
                ? 'double'
                : 'int';
        case LiteralType.String:
            return 'wchar_t *';
        default:
            return 'UndefinedLiteralType';
    }
}

export function generateStructType(name: string, object: any) {
    `typedef struct {
        ${Object.entries(object)
            .map(x => `${x[1]} ${[0]};`)
            .join(newLine)}
      } ${name};`;
}

export function alignBefore(text: string, times = 0) {
    return text
        .split('\n')
        .map(x => [...Array(times)].map(x => tabSpace).join('') + `${x}`)
        .join('\n');
}
