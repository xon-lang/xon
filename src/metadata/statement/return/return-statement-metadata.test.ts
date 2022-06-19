import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getStatementMetadata } from '../statement-metadata-helper';
import { ReturnStatementMetadata } from './return-statement-metadata';

test('return', () => {
  const code = 'return 123';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ReturnStatementMetadata);
});
