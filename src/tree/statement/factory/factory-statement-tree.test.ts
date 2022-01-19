import { parseStatement } from '../../../util/parse';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { FactoryStatementTree } from './factory-statement-tree';

test('factory', () => {
  const code = 'factory Integer(a Number)\n  a String\n  b Char';
  const tree = parseStatement(code) as FactoryStatementTree;
  expect(tree).toBeInstanceOf(FactoryStatementTree);

  expect(tree.id.name.text).toBe('Integer');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.name.text).toBe('a');
  expect((tree.parameters[0].type as IdExpressionTree).id.name.text).toBe('Number');
  expect(tree.attributes.length).toBe(2);
});
