import { parseExtensionProperty } from '../parse';
import { ExtensionPropertyTree } from './extension-property.tree';

test('has a statement', () => {
  const code = 'Float.prop String:\n    log(222)';
  const tree = parseExtensionProperty(code);
  expect(tree).toBeInstanceOf(ExtensionPropertyTree);

  expect(tree.name).toBe('prop');
  expect(tree.extensionType.name).toBe('Float');
  expect(tree.returnType.name).toBe('String');
});
