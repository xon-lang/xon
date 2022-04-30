import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getStatementMetadata } from '../statement-metadata-helper';
import { DefinitionStatementMetadata } from './definition-statement-metadata';

test('literal', () => {
  const code = 'model A';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(DefinitionStatementMetadata);
});
