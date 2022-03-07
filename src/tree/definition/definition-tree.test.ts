import fs from 'fs';
import { Issue } from '../../issue-service/issue';
import { parseDefinition, parseSourceFile } from '../../util/parse';
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

test('model animal with only attribute', () => {
  const code = 'model Animal\n   abc Integer';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.modifier.text).toBe('model');
  expect(tree.id.name.text).toBe('Animal');
  expect(tree.base).toBe(null);
  expect(tree.attributes.length).toBe(1);
  expect(tree.attributes[0].id.name.text).toBe('abc');
  expect((tree.attributes[0].type as IdExpressionTree).id.name.text).toBe('Integer');
});

test('1-error.xon', () => {
  try {
    const tree = parseSourceFile('src/tree/definition/test-files/1-error.xon');
    expect(tree.definitions[0]).toBeInstanceOf(DefinitionTree);

    const formatted = tree.toString();
    fs.writeFileSync('src/tree/definition/test-files/1-error.fmt.xon', formatted);
  } catch (error) {
    expect(error).toBeInstanceOf(Issue);
    if (error instanceof Issue) {
      expect(error.line).toBe(3);
      expect(error.column).toBe(14);
      expect(error.column + error.message.length).toBe(32);
    }
  }
});
