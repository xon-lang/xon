import { parseExtensionMethod } from '../parse';
import { ExtensionMethodTree } from './extension-method.tree';

test('has a statement', () => {
  const code = 'Float.funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseExtensionMethod(code);
  expect(tree).toBeInstanceOf(ExtensionMethodTree);

  expect(tree.name).toBe('funcName');
  expect(tree.extensionType.name).toBe('Float');
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect(tree.parameters[0].type.name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect(tree.parameters[1].type.name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect(tree.parameters[2].type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
});
