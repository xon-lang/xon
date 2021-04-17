import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { parseProgram } from '../../tree/parse';
import { ProgramTree } from '../../tree/program/program.tree';
import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { clearScopes } from '../id-scope';
import { fillProgramTypes } from './program-type.helper';

test('has one statement no generics', () => {
  const code = `

a = Animal()


Animal:
  weigh Integer
`;
  const tree = parseProgram(code);
  expect(tree).toBeInstanceOf(ProgramTree);

  clearScopes();
  fillProgramTypes(tree, new Map());
  expect((tree.statements[0] as AssignmentStatementTree).type.toString()).toBe('Animal');
});

test('has one statement with generics', () => {
  const code = `
a = Animal<Float>()
b = a.weight
c = a.get<String>(b)


Animal<T>:
  weight T

  get<V>(a T) V:
    -- 
`.trim();
  const tree = parseProgram(code);
  expect(tree).toBeInstanceOf(ProgramTree);

  const cValue = (tree.statements[2] as AssignmentStatementTree).value as MethodExpressionTree;
  expect(cValue).toBeInstanceOf(MethodExpressionTree);

  clearScopes();
  fillProgramTypes(tree, new Map());
  expect((tree.statements[0] as AssignmentStatementTree).type.toString()).toBe('Animal<Float>');
  expect((tree.statements[1] as AssignmentStatementTree).type.toString()).toBe('Float');
  expect((tree.statements[2] as AssignmentStatementTree).type.toString()).toBe('String');
});
