import { DefinitionTypeMetadata } from '../../src/metadata/expression/type/definition/definition-type-metadata';
import { ValueMetadata } from '../../src/metadata/expression/value/value-metadata';
import { SourceMetadata } from '../../src/metadata/source/source-metadata';
import { getSourceMetadata } from '../../src/metadata/source/source-metadata-helper';
import { PrefixExpressionTree } from '../../src/tree/expression/prefix/prefix-expression-tree';
import { DeclarationStatementTree } from '../../src/tree/statement/declaration/declaration-statement-tree';
import { parseSourceFile } from '../../src/util/parse';

test('import', () => {
  const tree = parseSourceFile('test/import/b.xon');
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);

  const statement = tree.statements[0] as DeclarationStatementTree;
  const importExpression = statement.declaration.value as PrefixExpressionTree;
  const importMetadata = importExpression.metadata as ValueMetadata;
  const abcDeclaration = importMetadata.type().attributesScope().filter('ABC')[0];

  expect(abcDeclaration.name).toBe('ABC');
  expect(statement.declaration.destructure[0].metadata.name).toBe('ABC');

  const statement2 = tree.statements[1] as DeclarationStatementTree;
  const parameterMetadata = statement2.declaration.type.metadata as DefinitionTypeMetadata;
  expect(parameterMetadata.definition.name).toBe('ABC');
});