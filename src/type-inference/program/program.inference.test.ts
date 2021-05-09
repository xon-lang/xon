import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { parseProgram } from '../../tree/parse';
import { ProgramTree } from '../../tree/program/program.tree';
import { IdAssignmentStatementTree } from '../../tree/statement/id-assignment-statement/id-assignment-statement.tree';
import { clearScopes } from '../id-scope';
import { IdAssignmentStatementInference } from '../statement/id-assignment-statement/id-assignment-statement.inference';
import { getProgramInference } from './program-inference.helper';

test('has one statement no generics', () => {
  const code = `

a = Animal()


Animal:
  weigh Integer
`;
  const tree = parseProgram(code);
  expect(tree).toBeInstanceOf(ProgramTree);

  clearScopes();
  const inference = getProgramInference(tree, new Map());

  expect((inference.statements[0] as IdAssignmentStatementInference).type.toString()).toBe(
    'Animal',
  );
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

  const cValue = (tree.statements[2] as IdAssignmentStatementTree).value as MethodExpressionTree;
  expect(cValue).toBeInstanceOf(MethodExpressionTree);

  clearScopes();
  const inference = getProgramInference(tree, new Map());
  expect((inference.statements[0] as IdAssignmentStatementInference).type.toString()).toBe(
    'Animal<Float>',
  );
  expect((inference.statements[1] as IdAssignmentStatementInference).type.toString()).toBe('Float');
  expect((inference.statements[2] as IdAssignmentStatementInference).type.toString()).toBe(
    'String',
  );
});
