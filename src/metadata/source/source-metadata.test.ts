import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { SourceMetadata } from '@/metadata/source/source-metadata';
import { getSourceMetadata } from '@/metadata/source/source-metadata-helper';
import { DeclarationTree } from '@/tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '@/tree/statement/declaration/declaration-statement-tree';
import { parseSource, parseSourceFile } from '@/util/parse';

test('1-error.xon', () => {
  const tree = parseSourceFile('src/metadata/source/test-files/1-error.xon');
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  const issues = tree.allIssues();
  expect(issues.length).toBe(2);
  expect(issues[0].message).toBe('No declarations found');
  expect(issues[1].message).toBe('Wrong import path');
});

test('2.xon', () => {
  const tree = parseSource("{null} := import 'src/lib/@xon/core'");
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  const declarations = tree.scope.filter('null');
  expect(declarations.length).toBe(1);
  const declarationTree = (tree.statements[0] as DeclarationStatementTree)
    .declaration as DeclarationTree;
  expect(declarationTree.destructure[0].metadata.sourceRange.sourceName).toBe(
    '/Users/nizami/work/xon/core/src/lib/@xon/core/special.xon',
  );
});
