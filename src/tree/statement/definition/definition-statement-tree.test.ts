import { parseStatement } from '../../../util/parse';
import { DefinitionTree } from '../../definition/definition-tree';
import { DefinitionStatementTree } from './definition-statement-tree';

test('model animal', () => {
  const code = 'model Animal';
  const { definition: tree } = parseStatement(code) as DefinitionStatementTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(null);
  expect(tree.attributes.length).toBe(0);
});
