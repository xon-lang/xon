import { DeclarationScope } from '../../src/metadata/declaration/scope/declaration-scope';
import { ValueMetadata } from '../../src/metadata/expression/value/value-metadata';
import { getSourceMetadata } from '../../src/metadata/source/source-metadata-helper';
import { PrefixExpressionTree } from '../../src/tree/expression/prefix/prefix-expression-tree';
import { DeclarationStatementTree } from '../../src/tree/statement/declaration/declaration-statement-tree';
import { parseSourceFile } from '../../src/util/parse';

test('import', () => {
  const tree = parseSourceFile('test/import/b.xon');
  const scope = new DeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  const statement = tree.statements[0] as DeclarationStatementTree;
  const importExpression = statement.declaration.value as PrefixExpressionTree;
  const importMetadata = importExpression.metadata as ValueMetadata;
  const abcDeclaration = importMetadata.type().attributesScope().filter('ABC')[0];

  expect(abcDeclaration?.name).toBe('ABC');
});
