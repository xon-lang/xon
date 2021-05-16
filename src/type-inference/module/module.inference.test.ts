import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { ModuleTree } from '../../tree/module/module.tree';
import { parseModule } from '../../tree/parse';
import { IdAssignmentStatementTree } from '../../tree/statement/id-assignment-statement/id-assignment-statement.tree';
import { clearScopes } from '../id-scope';
import { IdAssignmentStatementInference } from '../statement/id-assignment-statement/id-assignment-statement.inference';
import { getModuleInference } from './module-inference.helper';

test('has one statement no generics', () => {
  const code = `

a = Animal()


Animal:
  weigh Integer
`;
  const tree = parseModule(code);
  expect(tree).toBeInstanceOf(ModuleTree);

  clearScopes();
  const inference = getModuleInference(tree, new Map());

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
  const tree = parseModule(code);
  expect(tree).toBeInstanceOf(ModuleTree);

  const cValue = (tree.statements[2] as IdAssignmentStatementTree).value as MethodExpressionTree;
  expect(cValue).toBeInstanceOf(MethodExpressionTree);

  clearScopes();
  const inference = getModuleInference(tree, new Map());
  expect((inference.statements[0] as IdAssignmentStatementInference).type.toString()).toBe(
    'Animal<Float>',
  );
  expect((inference.statements[1] as IdAssignmentStatementInference).type.toString()).toBe('Float');
  expect((inference.statements[2] as IdAssignmentStatementInference).type.toString()).toBe(
    'String',
  );
});
