import { parseStatement } from '../../../util/parse';
import { ParameterStatementMetadata } from '../../statement/parameter/parameter-statement-metadata';
import { getStatementMetadata } from '../../statement/statement-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';

test('single parameter', () => {
  const code = 'a: 132';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(ParameterStatementMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.find('a').name).toBe('a');
});

test('multiple parameters', () => {
  const code = '{a, b, c}: 123';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(ParameterStatementMetadata);
  expect(scope.declarations.length).toBe(3);
  expect(scope.find('a').name).toBe('a');
  expect(scope.find('b').name).toBe('b');
  expect(scope.find('c').name).toBe('c');
});
