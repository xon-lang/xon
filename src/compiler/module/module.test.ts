import { getModuleFromLocation } from '~/compiler/module/module-helper';

test('module from path', () => {
  const tree = getModuleFromLocation('src/lib/@xon/core');

  expect(tree.modules.length).toBe(2);
  expect(tree.sources.length).toBe(3);

  const testModule = tree.modules.find((x) => x.name === 'test');
  expect(testModule?.name).toBe('test');
  expect(testModule?.location).toBe('src/lib/@xon/core/test');
});
