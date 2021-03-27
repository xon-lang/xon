import * as fs from 'fs';
import { parseDefinition } from '../../parse';
import { DefinitionTree } from '../../tree/definition/definition.tree';

test('program-1', () => {
  const code = fs.readFileSync('src/id-service/tests/program-1.xon').toString();
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.name).toBe('SimpleClass');
});
