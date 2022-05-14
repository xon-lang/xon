import path from 'path';
import { DefinitionStatementTree } from '../../../tree/statement/definition/definition-statement-tree';
import { ParameterStatementTree } from '../../../tree/statement/parameter/parameter-statement-tree';
import { SourceRange } from '../../../util/source-range';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationMetadata } from '../declaration-metadata-helper';

export class FolderDeclarationMetadata implements DeclarationMetadata {
  sourceRange: SourceRange;
  name: string;

  constructor(private folderPath: string) {
    this.name = path.resolve(tree.sourceRange.sourceName);
  }

  attributes(): DeclarationMetadata[] {
    const attributes = this.tree.statements
      .filter((x) => x instanceof DefinitionStatementTree || x instanceof ParameterStatementTree)
      .map((x) => getDeclarationMetadata(x, this.scope));
    return attributes;
  }

  is(metadata: DeclarationMetadata): boolean {
    return this.sourceRange.equals(metadata.sourceRange);
  }
}
