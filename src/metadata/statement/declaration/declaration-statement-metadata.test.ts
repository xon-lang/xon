import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getStatementMetadata } from '../statement-metadata-helper';
import { DeclarationStatementMetadata } from './declaration-statement-metadata';

test('single parameter', () => {
  const code = 'a: 132';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(DeclarationStatementMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.find('a').name).toBe('a');
});

// todo implement it
// test('multiple parameters', () => {
//   const code = '{a, b, c} = [1, 2, 3]';
//   const tree = parseStatement(code);
//   const scope = new TestDeclarationScope();
//   const metadata = getStatementMetadata(tree, scope);

//   expect(metadata).toBeInstanceOf(ParameterStatementMetadata);
//   expect(scope.declarations.length).toBe(3);
//   expect(scope.find('a').name).toBe('a');
//   expect(scope.find('b').name).toBe('b');
//   expect(scope.find('c').name).toBe('c');
// });
