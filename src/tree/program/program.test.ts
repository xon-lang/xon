import { parse } from '../../parse';
import { ProgramTree } from './program.tree';

test('two if', () => {
    const code = `if e1:
    7+7
elif e2:
    call3()
`;
    const tree = new ProgramTree(parse(code).program());

    expect(tree).toBeInstanceOf(ProgramTree);
    expect(tree.statements.length).toBe(1);
    // expect(evalExpression(tree.ifCondition)).toBe(12 + 45 / 9);
    // expect(tree.ifStatements.length).toBe(1);
    // const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    // expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    // expect(evalExpression(tree.elseCondition)).toBe(2 + 2);
    // expect(tree.elseStatements.length).toBe(1);
    // const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
    // expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});
