import { parseStatement } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getStatementMetadata } from '../statement-metadata-helper';
import { IfStatementMetadata } from './if-statement-metadata';

test('if', () => {
  const code = 'if true\n  123';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(IfStatementMetadata);
});
