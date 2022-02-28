import { Issue } from '../../../issue-service/issue';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterDeclarationMetadata } from '../parameter/parameter-declaration-metadata';

export class DefinitionDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private tree: DefinitionTree, private scope: DeclarationScope) {
    this.sourceReference = tree.sourceReference;
    this.name = tree.id.name.text;
  }

  attributes(): ParameterDeclarationMetadata[] {
    throw new Error('Not implemented');
    // const ancestorsAttributes = this.baseModel()?.attributes() || [];
    // const currentAttributes = this.tree.attributes.map(
    //   (x) => new ParameterDeclarationMetadata(x, this.scope),
    // );
    // return [...currentAttributes, ...ancestorsAttributes];
  }

  baseModel(): DefinitionDeclarationMetadata | null {
    if (!this.tree.base) return null;
    if (this.tree.base instanceof IdExpressionTree)
      return this.scope.findModel(this.tree.base.id.name.text);
    Issue.errorFromTree(this.tree.base, 'Not implemented');
  }

  is(metadata: DeclarationMetadata): boolean {
    return (
      this.sourceReference.equals(metadata.sourceReference) ||
      this.baseModel()?.is(metadata) ||
      false
    );
  }
}
