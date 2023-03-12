import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';
import { IdTypeMetadata } from '~/metadata/type/id/id-type-metadata';
import { PrefixExpressionTree } from '~/node/prefix/prefix-node';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseSourceFile } from '~/util/parse';

test('import', () => {
  const tree = parseSourceFile('test/import/b.xon');
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);

  const statement = tree.nodes[0] as DeclarationStatementTree;
  const importExpression = statement.declaration.value as PrefixExpressionTree;
  const importMetadata = importExpression.metadata as ValueMetadata;
  const [abcDeclaration] = importMetadata.type()?.scope()?.filter('ABC') ?? [];

  expect(abcDeclaration.name).toBe('ABC');
  expect(statement.declaration.destructure[0].metadata?.name).toBe('ABC');

  const statement2 = tree.nodes[1] as DeclarationStatementTree;
  const parameterMetadata = statement2.declaration.type?.metadata as IdTypeMetadata;
  expect(parameterMetadata.declaration.name).toBe('ABC');
});
