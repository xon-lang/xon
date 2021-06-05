import { DirectoryDependencyProvider } from './directory-dependency.provider';

test('can handle xon-lib', () => {
  const provider = new DirectoryDependencyProvider('src/xon-lib');
  const dependency = provider.get('xon', 'core');
  expect(dependency.definitions.length).toBe(10);
});
