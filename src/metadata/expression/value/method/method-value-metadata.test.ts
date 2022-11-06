import {
  fillValueMetadata,
  MethodTypeMetadata,
  MethodValueMetadata,
  TestDeclarationScope,
} from '~/metadata';
import { parseExpression } from '~/util';

test('lambda', () => {
  const code = '(x: Number) => x + x';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(MethodValueMetadata);
  const type = metadata.type() as MethodTypeMetadata;
  expect(type).toBeInstanceOf(MethodTypeMetadata);
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name).toBe('x');
  expect(type.parameters[0].type.is(tree.scope.core.number.type)).toBe(true);
  expect(type.resultType.is(tree.scope.core.number.type)).toBe(true);
});
