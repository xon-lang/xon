import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { LiteralTypeMetadata } from '../literal/literal-type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';
import { ArrayTypeMetadata } from './array-type-metadata';

test('no items', () => {
  const code = 'Integer[]';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as ArrayTypeMetadata;

  expect(metadata).toBeInstanceOf(ArrayTypeMetadata);
  expect(metadata.commonType().equals(scope.core.integer.type())).toBe(true);
  expect(metadata.items().length).toBe(0);
});

test('has items', () => {
  const code = "[1, 'hi']";
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as ArrayTypeMetadata;

  expect(metadata).toBeInstanceOf(ArrayTypeMetadata);
  expect(
    metadata
      .commonType()
      .equals(
        UnionTypeMetadata.fromTypes([
          new LiteralTypeMetadata(1, () => scope.core.integer),
          new LiteralTypeMetadata('hi', () => scope.core.string),
        ]),
      ),
  ).toBe(true);
  expect(metadata.items().length).toBe(2);
  expect(metadata.items()[0].equals(new LiteralTypeMetadata(1, () => scope.core.integer))).toBe(
    true,
  );
  expect(metadata.items()[1].equals(new LiteralTypeMetadata('hi', () => scope.core.string))).toBe(
    true,
  );
});
