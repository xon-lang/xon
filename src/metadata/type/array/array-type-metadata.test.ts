import { parseExpression } from '../../../tree/parse';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { TupleTypeMetadata } from '../tuple/tuple-type-metadata';

test('array', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(TupleTypeMetadata);
});
