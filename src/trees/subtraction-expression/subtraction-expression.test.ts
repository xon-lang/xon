import { parseCode } from '../../test-helper/parse';
import { SubtractionExpressionTree } from './subtraction-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one minus one', () => {
    const code = '1-1';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(SubtractionExpressionTree);
});
