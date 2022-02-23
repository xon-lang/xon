import { parseDefinition } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { DefinitionTree } from './definition-tree';

test('model cat', () => {
  const code = 'model Cat Animal';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.modifier.text).toBe('model');
  expect(tree.id.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).id.name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});
