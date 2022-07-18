import { parseSource } from '../../../util/parse';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';

test('single parameter', () => {
  const code = 'operator +(a: Number, b: Number) : Number';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.filter('+')[0].name).toBe('+');
});
