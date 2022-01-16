import { ModelStatementTree } from '../../../tree/statement/model/model-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationsMetadata } from '../declaration-metadata-helper';

export class ModelDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: ModelStatementTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  attributes(): DeclarationMetadata[] {
    const ancestorsAttributes = this.baseModel()?.attributes() || [];
    const currentAttributes = getDeclarationsMetadata(this.node.attributes, this.scope);
    return [...currentAttributes, ...ancestorsAttributes];
  }

  baseModel(): ModelDeclarationMetadata {
    if (!this.node.base) return null;
    return this.scope.findModel(this.node.base.name.text);
  }

  is(metadata: DeclarationMetadata): boolean {
    return (
      this.sourceReference.equals(metadata.sourceReference) ||
      this.baseModel()?.is(metadata) ||
      false
    );
  }
}
