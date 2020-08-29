import * as fs from 'fs';
import { evalExpression } from '../../eval';
import { parseCode } from '../../parse';
import { AssignmentStatementTree } from '../statement/assignment-statement/assignment-statement.tree';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { ProgramTree } from './program.tree';

test('one scope', () => {
    const code = fs.readFileSync('src/tree/program/one-scope.test.xon').toString();
    const tree = parseCode(code, ProgramTree);
    expect(tree).toBeInstanceOf(ProgramTree);

    expect(tree.imports.length).toBe(1);
    expect(tree.imports[0].path).toBe('./one-scope.test.xon');
    expect(tree.imports[0].members.length).toBe(2);
    expect(tree.imports[0].members[0].name).toBe('one');
    expect(tree.imports[0].members[0].alias).toBe('single');
    expect(tree.imports[0].members[1].name).toBe('second');
    expect(tree.imports[0].members[1].alias).toBeUndefined();

    expect(tree.statements.length).toBe(2);
    const func = tree.statements[0] as FunctionStatementTree;
    expect(func).not.toBeUndefined();
    expect(func.value.name).toBe('oneScope');
    expect(func.value.args.length).toBe(0);

    expect(func.value.statements[0]).toBeInstanceOf(AssignmentStatementTree);
    expect(evalExpression((func.value.statements[0] as AssignmentStatementTree).value)).toBe(
        23 + 5
    );
});
