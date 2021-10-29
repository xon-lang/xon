import * as path from 'path';
import { parseType } from '../../../tree/parse';
import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { HandlerScope } from '../handler-scope';
import { TypeHandler } from './type-handler';

test('string type', () => {
  const code = 'String';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
  const scope = HandlerScope.fromGlobPath(globPath);
  new TypeHandler(scope).handle(tree);
  expect(tree.typeMetadata.name).toBe('String');
  expect(tree.id.declarationLink.line).toBe(1);
});
