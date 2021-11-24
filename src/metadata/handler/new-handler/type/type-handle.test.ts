import { parseType } from '../../../../tree/parse';
import { IdTypeTree } from '../../../../tree/type/id-type/id-type.tree';
import { ClassTypeMetadata } from '../../../type/id-type/class-type/class-type-metadata';
import { TypeHandler } from '../../type/type-handler';
import { TestScope } from '../test-scope';
import { typeHandle } from './type-handle';

test('string type', () => {
  const code = 'String';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  typeHandle(tree, new TestScope());
  expect(tree.typeMetadata.name).toBe('String');
  expect(tree.id.declarationLink.line).toBe(1);
});

test('array generic type', () => {
  const code = 'Array<String>';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  typeHandle(tree, new TestScope());
  const type = tree.typeMetadata as ClassTypeMetadata;
  expect(type.name).toBe('Array');
  expect(type.genericArguments[0].name).toBe('String');
});
