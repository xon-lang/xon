import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { MethodTypeMetadata } from '../../expression/type/method/method-type-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { MethodValueMetadata } from './method-value-metadata';

test('lambda', () => {
  const code = '(x: Number) => x + x';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(MethodValueMetadata);
  const type = metadata.type() as MethodTypeMetadata;
  expect(type).toBeInstanceOf(MethodTypeMetadata);
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name).toBe('x');
  expect(type.parameters[0].type.is(scope.core.number.type)).toBe(true);
  expect(type.resultType.is(scope.core.number.type)).toBe(true);
});
