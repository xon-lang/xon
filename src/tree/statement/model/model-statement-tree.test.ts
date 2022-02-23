import { parseStatement } from '../../../util/parse';
import { ModelStatementTree } from './model-statement-tree';

test('model', () => {
  const code = 'model Integer Number\n  a String\n  b Char';
  const tree = parseStatement(code) as ModelStatementTree;
  expect(tree).toBeInstanceOf(ModelStatementTree);

  expect(tree.id.name.text).toBe('Integer');
  expect(tree.base.name.text).toBe('Number');
  expect(tree.attributes.length).toBe(2);
});
