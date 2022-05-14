import path from 'path';
import { SourceTree } from '../../../tree/source/source-tree';
import { DefinitionStatementTree } from '../../../tree/statement/definition/definition-statement-tree';
import { ParameterStatementTree } from '../../../tree/statement/parameter/parameter-statement-tree';
import { SourceRange } from '../../../util/source-range';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';
import { DeclarableTree, getDeclarationMetadata } from '../declaration-metadata-helper';

export class SourceDeclarationMetadata implements DeclarationMetadata {
  sourceRange: SourceRange;
  name: string;

  constructor(private tree: SourceTree, private scope: DeclarationScope) {
    this.sourceRange = tree.sourceRange;
    this.name = path.resolve(tree.sourceRange.sourceName);
  }

  attributes(): DeclarationMetadata[] {
    const attributes = this.tree.statements
      .filter((x) => x instanceof DefinitionStatementTree || x instanceof ParameterStatementTree)
      .map((x: DeclarableTree) => getDeclarationMetadata(x, this.scope));
    return attributes;
  }

  is(metadata: DeclarationMetadata): boolean {
    return this.sourceRange.equals(metadata.sourceRange);
  }
}
