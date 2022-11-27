import { ModuleTree } from '~/tree/module/module-tree';
import { getModuleTreeFromPath } from '~/tree/module/module-tree-helper';

test('module from path', () => {
  const tree = getModuleTreeFromPath('src/lib/@xon/core');

  expect(tree).toBeInstanceOf(ModuleTree);
  expect(tree.children.length).toBe(10);

  const testModule = tree.children.find((x) => x instanceof ModuleTree) as ModuleTree;
  expect(testModule).toBeInstanceOf(ModuleTree);
  expect(testModule.name).toBe('test');
  expect(testModule.sourceName).toBe('src/lib/@xon/core/test/');
});
