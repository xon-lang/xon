import { LiteralExpressionNode } from '../../../ast/expression/literal/literal-expression-node';
import { Issue } from '../../../issue-service/issue';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata implements ExpressionMetadata {
  constructor(private node: LiteralExpressionNode, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    const declaration = this.scope.findByName(
      this.node.literal.constructor.name.replace('LiteralNode', ''),
    );
    if (declaration instanceof InterfaceDeclarationMetadata) {
      return declaration.attributes();
    }
    Issue.errorFromNode(this.node, `Couldn't find literal type`);
  }
}
