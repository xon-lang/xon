import { FactoryStatementTree } from '../../../tree/statement/new/new-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';
import { ModelDeclarationMetadata } from '../model/model-declaration-metadata';

export class FactoryDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: FactoryStatementTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  baseModel(): ModelDeclarationMetadata {
    if (!this.node.base) return null;
    return this.scope.findModel(this.node.base.name.text);
  }
}
