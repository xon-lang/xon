import { DirectoryDependencyProvider } from './find-type-member';

test('can handle xon-lib', () => {
  const provider = new DirectoryDependencyProvider('xon-project-sample/lib');
  const dependency = provider.get('xon', 'core');
  expect(dependency.definitions.length).toBe(10);
});
