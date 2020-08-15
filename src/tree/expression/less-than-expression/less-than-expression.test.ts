import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { LessThanExpressionTree } from './less-than-expression.tree';

test('less than', () => {
    const code = '234<634';
    const tree = parseCode(code, LessThanExpressionTree);
    expect(evalExpression(tree)).toBe(234 < 634);
});
