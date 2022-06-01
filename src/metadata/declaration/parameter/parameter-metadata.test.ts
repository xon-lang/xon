import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';
import { ParameterStatementMetadata } from '../../parameter/parameter-metadata';

test('single parameter', () => {
  const code = 'a: 132';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(ParameterStatementMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.findByName('a').name).toBe('a');
});

test('multiple parameters', () => {
  const code = '{a, b, c}: 123';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(ParameterStatementMetadata);
  expect(scope.declarations.length).toBe(3);
  expect(scope.findByName('a').name).toBe('a');
  expect(scope.findByName('b').name).toBe('b');
  expect(scope.findByName('c').name).toBe('c');
});
