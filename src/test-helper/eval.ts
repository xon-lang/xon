import { BaseTree } from '../trees/base.tree';

export function evalExpression(tree: BaseTree) {
    switch (tree.type) {
        case 'IntegerLiteralExpression':
            return +tree['value'];
        case 'MultiplicationExpression':
            return evalExpression(tree['left']) * evalExpression(tree['right']);
        case 'DivideExpression':
            return evalExpression(tree['left']) / evalExpression(tree['right']);
        case 'AddExpression':
            return evalExpression(tree['left']) + evalExpression(tree['right']);
        case 'SubtractionExpression':
            return evalExpression(tree['left']) - evalExpression(tree['right']);
    }
}
