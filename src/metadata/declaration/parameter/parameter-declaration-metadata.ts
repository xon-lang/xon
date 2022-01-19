import { Issue } from '../../../issue-service/issue';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: ParameterTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  type(): ExpressionMetadata {
    if (this.node.type) {
      return getExpressionMetadata(this.node.type, this.scope);
    } else if (this.node.body) {
      if (this.node.body instanceof SingleBodyTree) {
        if (this.node.body.statement instanceof ExpressionStatementTree) {
          return getExpressionMetadata(this.node.body.statement.expression, this.scope);
        }
      } else {
        // todo join all return expressions
      }
    }
    Issue.errorFromTree(this.node, `Attribute '${this.node.id}' must have a type`);
  }

  is(metadata: ExpressionMetadata): boolean {
    return this.type().is(metadata);
  }
}
