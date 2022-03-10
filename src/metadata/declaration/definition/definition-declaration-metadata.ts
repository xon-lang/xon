import { Issue } from '../../../issue-service/issue';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { SourceRange } from '../../../util/source-range';
import { DeclarationScope } from '../../scope/declaration-scope';
import { AttributeDeclarationMetadata } from '../attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class DefinitionDeclarationMetadata implements DeclarationMetadata {
  sourceRange: SourceRange;
  name: string;

  constructor(private tree: DefinitionTree, private scope: DeclarationScope) {
    this.sourceRange = tree.sourceRange;
    this.name = tree.id.name.text;
  }

  attributes(): AttributeDeclarationMetadata[] {
    const attributes = {};
    (this.baseModel()?.attributes() || []).forEach((x) => (attributes[x.name] = x));
    this.tree.attributes
      .map((x) => new AttributeDeclarationMetadata(x, this.scope))
      .forEach((x) => (attributes[x.name] = x));
    return Object.values(attributes);
  }

  baseModel(): DefinitionDeclarationMetadata | null {
    if (!this.tree.base) return null;
    if (this.tree.base instanceof IdExpressionTree)
      return this.scope.findModel(this.tree.base.id.name.text);
    Issue.errorFromTree(this.tree.base, 'Not implemented');
  }

  is(metadata: DeclarationMetadata): boolean {
    return this.sourceRange.equals(metadata.sourceRange) || this.baseModel()?.is(metadata) || false;
  }
}
