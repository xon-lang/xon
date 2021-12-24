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
  generics: ExpressionMetadata[];
  type: ExpressionMetadata;

  constructor(public node: DeclarationNode, scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
    this.generics = node.id.generics.map((x) => getExpressionMetadata(x, scope));
    this.type = this.getType(node, scope);
  }

  private getType(node: DeclarationNode, scope: DeclarationScope): ExpressionMetadata {
    if (node.type) {
      return getExpressionMetadata(node.type, scope);
    } else if (node.body) {
      if (node.body instanceof SingleBodyNode) {
        if (node.body.statement instanceof ExpressionStatementNode) {
          return getExpressionMetadata(node.body.statement.expression, scope);
        }
      } else {
        // todo join all return expressions
      }
    }
    // Issue.errorFromNode(node, `Attribute '${node.id}' must have a type`);
  }
}
