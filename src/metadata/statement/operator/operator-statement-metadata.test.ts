import { none } from '../../../lib/core';
import { parseStatement } from '../../../util/parse';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { MethodTypeMetadata } from '../../expression/type/method/method-type-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';
import { OperatorStatementMetadata } from './operator-statement-metadata';

test('single parameter', () => {
  const code = 'operator + (a: Number, b: Number) => Number';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(OperatorStatementMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.find('+').name).toBe('+');
  const declaration = scope.find('+') as ParameterMetadata;
  expect(declaration).toBeInstanceOf(ParameterMetadata);
  expect(declaration.value()).toBe(none);
  const type = declaration.type() as MethodTypeMetadata;
  expect(type).toBeInstanceOf(MethodTypeMetadata);
  expect(type.parameters().length).toBe(2);
  expect(type.parameters()[0].name).toBe('a');
  expect(type.parameters()[0].type().is(scope.core.number.type())).toBe(true);
  expect(type.parameters()[0].type().is(scope.core.string.type())).toBe(false);
  expect(type.parameters()[1].name).toBe('b');
  expect(type.parameters()[1].type().is(scope.core.number.type())).toBe(true);
  expect(type.resultType().is(scope.core.number.type())).toBe(true);
});
