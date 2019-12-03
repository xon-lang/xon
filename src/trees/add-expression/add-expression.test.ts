import { parseCode } from '../../test-helper/parse';
import { AddExpressionTree } from './add-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one plus one', () => {
    const code = '1+1';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(AddExpressionTree);
});
