import { ImportStatementMetadata } from '~/metadata/statement/import/import-statement-metadata';
import { getStatementMetadata } from '~/metadata/statement/statement-metadata-helper';
import { parseStatement } from '~/util/parse';

test('literal', () => {
  const code = 'import \'src/lib/@xon/core\'';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree) as ImportStatementMetadata;

  expect(metadata).toBeInstanceOf(ImportStatementMetadata);
  expect(metadata.declarations.length).toBe(15);
  // expect(metadata.type()).toBeInstanceOf(ObjectTypeMetadata);
  // expect(metadata.type().scope().declarations.length).toBe(33);
});
