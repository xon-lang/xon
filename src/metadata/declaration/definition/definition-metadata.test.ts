import { parseStatement } from '../../../util/parse';
import { DeclarationStatementMetadata } from '../../statement/declaration/declaration-statement-metadata';
import { getStatementMetadata } from '../../statement/statement-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

test('definition', () => {
  const code = 'model A';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(DeclarationStatementMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.declarations[0]).toBeInstanceOf(DefinitionMetadata);
  expect(scope.declarations[0].name).toBe('A');
});
