import { parseCode } from '../../../test-helper';
import { MemberExpressionTree } from './member-expression.tree';

test('several properties', () => {
    const code = 'some.object.propName';
    const tree = parseCode(code, MemberExpressionTree);
    expect(tree.name).toBe('propName');
});

// test('function member', () => {
//     const code = 'some.object.propName(1,2,3).anotherFunc("sdf").prop';
//     const tree = parseCode(code, MemberExpressionTree);
//     expect(tree.name).toBe('propName');
// });
