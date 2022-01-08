import { parseStatement } from '../../../util/parse';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../expression/infix/infix-expression-tree';
import { DefinitionStatementTree, Modifier } from './definition-statement-tree';

test('model', () => {
  const code = 'model Integer is Number && AnotherOne<|T|>';
  const tree = parseStatement(code) as DefinitionStatementTree;
  expect(tree).toBeInstanceOf(DefinitionStatementTree);

  expect(tree.modifier).toBe(Modifier.model);
  expect(tree.id.name.text).toBe('Integer');
  expect(tree.parameters.length).toBe(0);
  const { left, right } = tree.base as InfixExpressionTree;
  expect((left as IdExpressionTree).id.name.text).toBe('Number');
  expect((right as IdExpressionTree).id.name.text).toBe('AnotherOne');
  expect((right as IdExpressionTree).id.generics[0].id.name.text).toBe('T');
  expect(tree.attributes.length).toBe(0);
});
