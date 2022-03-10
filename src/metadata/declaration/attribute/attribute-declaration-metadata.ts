import { Issue } from '../../../issue-service/issue';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { SourceRange } from '../../../util/source-range';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata implements DeclarationMetadata {
  sourceRange: SourceRange;
  name: string;

  constructor(private tree: AttributeTree, private scope: DeclarationScope) {
    this.sourceRange = tree.sourceRange;
    this.name = tree.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.tree.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  value(): ExpressionMetadata | null {
    if (this.tree.body) {
      if (this.tree.body instanceof SingleBodyTree) {
        if (this.tree.body.statement instanceof ExpressionStatementTree) {
          return getExpressionMetadata(this.tree.body.statement.expression, this.scope);
        }
      } else {
        // todo join all return expressions
      }
    }
    return null;
  }

  type(): ExpressionMetadata {
    if (this.tree.type) {
      return getExpressionMetadata(this.tree.type, this.scope);
    } else if (this.tree.body) {
      return this.value();
    }
    Issue.errorFromTree(this.tree, `Attribute '${this.tree.id}' must have a type`);
  }

  attributes(): AttributeDeclarationMetadata[] {
    return this.type().attributes();
  }

  is(metadata: ExpressionMetadata): boolean {
    return this.type().is(metadata);
  }
}
