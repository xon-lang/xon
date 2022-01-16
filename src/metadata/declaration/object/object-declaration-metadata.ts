import { ObjectStatementTree } from '../../../tree/statement/object/object-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationsMetadata } from '../declaration-metadata-helper';
import { ModelDeclarationMetadata } from '../model/model-declaration-metadata';

export class ObjectDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: ObjectStatementTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    return [];
  }

  attributes(): DeclarationMetadata[] {
    return this.baseModel()?.attributes() || [];
    // const ancestorsAttributes = this.baseModel()?.attributes() || [];
    // const currentAttributes = getDeclarationsMetadata(this.node.attributes, this.scope);
    // return [...currentAttributes, ...ancestorsAttributes];
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
