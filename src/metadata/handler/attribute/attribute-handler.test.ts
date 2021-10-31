import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { parseAttribute } from '../../../tree/parse';
import { AttributeHandler } from './attribute-handler';

test('variable declaration: type from value', () => {
  const code = 'a: 123';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  new AttributeHandler().handle(tree);
  expect(tree.id.declarationLink).toBe(tree.id.sourceReference);
  expect(tree.typeMetadata.name).toBe('Integer');
});
