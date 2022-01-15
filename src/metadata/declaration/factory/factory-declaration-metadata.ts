import { FactoryStatementTree } from '../../../tree/statement/factory/factory-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationsMetadata } from '../declaration-metadata-helper';

export class FactoryDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: FactoryStatementTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  attributes(): DeclarationMetadata[] {
    const ancestorsAttributes = this.ancestors().flatMap((x) => x.attributes());
    const currentAttributes = getDeclarationsMetadata(this.node.attributes, this.scope);
    return [...currentAttributes, ...ancestorsAttributes];
  }

  ancestors(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.ancestors.map((x) => getExpressionMetadata(x, this.scope));
  }
}
