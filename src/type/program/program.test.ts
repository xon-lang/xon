import { parseProgram } from '../../tree/parse';
import { ProgramTree } from '../../tree/program/program.tree';
import { AssignmentStatementTree } from '../../tree/statement/assignment-statement/assignment-statement.tree';
import { fillProgramTypes } from './program-type.helper';

test('has one statement no generics', () => {
  const code = `

a = Animal()


Animal:
  weigh Integer
`;
  const tree = parseProgram(code);
  expect(tree).toBeInstanceOf(ProgramTree);

  fillProgramTypes(tree, new Map());
  expect((tree.statements[0] as AssignmentStatementTree).type.toString()).toBe('Animal');
});
