import { getModuleFromLocation } from '~/tree/module/module-tree-helper';

test('module from path', () => {
  const tree = getModuleFromLocation('src/lib/@xon/core');

  expect(tree.modules.length).toBe(5);
  expect(tree.sources.length).toBe(5);

  const testModule = tree.modules.find((x) => x.name === 'test');
  expect(testModule?.name).toBe('test');
  expect(testModule?.location).toBe('src/lib/@xon/core/test');
});
