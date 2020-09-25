import { evalExpression } from '../../../../eval';
import { parseMember } from '../../../../parse';
import { InfixOperatorMemberTree } from './infix-operator-member.tree';

test('one_plus_one', () => {
    const code = 'infix + (a, b Number): 1 + 2';
    const tree = parseMember<InfixOperatorMemberTree>(code);
    expect(tree.operator).toBe('+');
    expect(tree.leftArg.name).toBe('a');
    expect(tree.leftArg.type).toBe(null);
    expect(tree.rightArg.name).toBe('b');
    expect(tree.rightArg.type.asSimple.name).toBe('Number');
    expect(tree.statements.length).toBe(1);
    expect(evalExpression(tree.statements[0].asExpression)).toBe(3);
});
