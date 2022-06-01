import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';
import { ExpressionStatementMetadata } from './expression-statement-metadata';

test('literal', () => {
  const code = '123';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ExpressionStatementMetadata);
});
