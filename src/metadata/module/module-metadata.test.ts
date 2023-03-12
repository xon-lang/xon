import { ModuleMetadata } from '~/metadata/module/module-metadata';
import { getModuleMetadata } from '~/metadata/module/module-metadata-helper';
import { getModuleFromLocation } from '~/module/module-helper';

test('core module', () => {
  const tree = getModuleFromLocation('src/lib/@xon/core');
  const metadata = getModuleMetadata(tree);

  expect(metadata).toBeInstanceOf(ModuleMetadata);

  const integers = metadata.tree.scope.filter('Integer');
  expect(integers.length).toBe(1);
  // const integer = integers[0];
});

// test('from tree', () => {
//   const code = 'model Animal';
//   const tree = parseSource(code);
//   const moduleDeclaration = getModuleDeclarationMetadata('abc', [tree]);

//   expect(moduleDeclaration).toBeInstanceOf(ModuleDeclarationMetadata);
//   expect(moduleDeclaration.scope.declarations.length).toBe(1);
//   expect(moduleDeclaration.scope.filter('Animal').length).toBe(1);
// });

// test('from core path', () => {
//   const modulePath = '/Users/nizami/work/xon/core/src/lib/@xon/core';
//   const moduleDeclaration = getModuleDeclarationMetadataByModulePath(modulePath);

//   expect(moduleDeclaration).toBeInstanceOf(ModuleDeclarationMetadata);
//   expect(moduleDeclaration.scope.declarations.length).toBe(34);

//   const testModule = moduleDeclaration.scope.filter('test')[0] as ModuleDeclarationMetadata;
//   expect(moduleDeclaration.scope.filter('test').length).toBe(1);
//   expect(testModule).toBeInstanceOf(ModuleDeclarationMetadata);
//   expect(testModule.name).toBe('test');
//   expect(testModule.scope.declarations.length).toBe(3);
//   expect(testModule.scope.filter('BooleanTest').length).toBe(1);
//   expect(testModule.scope.filter('trueTest').length).toBe(1);
//   expect(testModule.scope.filter('falseTest').length).toBe(1);
// });
