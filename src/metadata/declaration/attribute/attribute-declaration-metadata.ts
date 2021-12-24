import { SingleBodyNode } from '../../../ast/body/single/single-body-node';
import { DeclarationNode } from '../../../ast/declaration/declaration-node';
import { ExpressionStatementNode } from '../../../ast/statement/expression/expression-statement-node';
import { SourceReference } from '../../../ast/util/source-reference';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: DeclarationNode, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    return this.node.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  type(): ExpressionMetadata {
    if (this.node.type) {
      return getExpressionMetadata(this.node.type, this.scope);
    } else if (this.node.body) {
      if (this.node.body instanceof SingleBodyNode) {
        if (this.node.body.statement instanceof ExpressionStatementNode) {
          return getExpressionMetadata(this.node.body.statement.expression, this.scope);
        }
      } else {
        // todo join all return expressions
      }
    }
    // Issue.errorFromNode(node, `Attribute '${this.node.id}' must have a type`);
  }
}
