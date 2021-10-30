import { parseType } from '../../../tree/parse';
import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { ClassTypeMetadata } from '../../type/id-type/class-type/class-type-metadata';
import { HandlerScope } from '../handler-scope';
import { TypeHandler } from './type-handler';

test('string type', () => {
  const code = 'String';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  const scope = HandlerScope.fromCoreModule();
  new TypeHandler(scope).handle(tree);
  expect(tree.typeMetadata.name).toBe('String');
  expect(tree.id.declarationLink.line).toBe(1);
});

test('array generic type', () => {
  const code = 'Array<String>';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  const scope = HandlerScope.fromCoreModule();
  new TypeHandler(scope).handle(tree);
  const type = tree.typeMetadata as ClassTypeMetadata;
  expect(type.name).toBe('Array');
  expect(type.genericArguments[0].name).toBe('String');
});
