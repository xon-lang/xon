import { DeclarationTree } from '../../tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { parseSource, parseSourceFile } from '../../util/parse';
import { TestDeclarationScope } from '../declaration/scope/test-declaration-scope';
import { SourceMetadata } from './source-metadata';
import { getSourceMetadata } from './source-metadata-helper';

test('1-error.xon', () => {
  const tree = parseSourceFile('src/metadata/source/test-files/1-error.xon');
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  const issues = tree.allIssues();
  expect(issues.length).toBe(2);
  expect(issues[0].message).toBe('No declarations found');
  expect(issues[1].message).toBe('Wrong import path');
});

test('2.xon', () => {
  const tree = parseSource("{none} := import 'src/lib/@xon/core'");
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  const declarations = scope.filter('none');
  expect(declarations.length).toBe(1);
  const declarationTree = (tree.statements[0] as DeclarationStatementTree)
    .declaration as DeclarationTree;
  expect(declarationTree.destructure[0].metadata.sourceRange.sourceName).toBe(
    '/Users/nizami/work/xon/core/src/lib/@xon/core/special.xon',
  );
});
