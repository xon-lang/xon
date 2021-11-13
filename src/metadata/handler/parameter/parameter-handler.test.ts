import { parseParameter } from '../../../tree/parse';
import { ParameterHandler } from './Parameter-handler';

test('variable declaration: type from value', () => {
  const code = 'a Integer';
  const tree = parseParameter(code);

  new ParameterHandler().handle(tree);
  expect(tree.id.declarationLink).toBe(tree.id.sourceReference);
  expect(tree.typeMetadata.name).toBe('Integer');
});
