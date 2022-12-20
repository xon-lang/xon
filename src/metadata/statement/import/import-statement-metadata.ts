import { dirname, resolve } from 'path';
import { IssueLevel } from '~/issue/issue-level';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ImportProvider } from '~/metadata/import-provider';
import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { ImportStatementTree } from '~/tree/statement/import/import-statement-tree';
import { evaluate } from '~/util/evaluate';

export class ImportStatementMetadata extends StatementMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(public tree: ImportStatementTree) {
    super();

    const importPath = evaluate(tree.path);
    const treeLocation = tree.sourceSpan.source.location;
    if (typeof importPath === 'string' && treeLocation) {
      const dirPath = dirname(treeLocation);
      const relativePath = resolve(dirPath, importPath);
      const importProvider = new ImportProvider(relativePath);
      
    } else {
      tree.addIssue(IssueLevel.error, 'Import path should be a string literal');
    }
  }
}
