import { Issue } from '../../../issue-service/issue';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata implements ExpressionMetadata {
  constructor(private node: LiteralExpressionTree, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    const declaration = this.scope.findByName(
      this.node.literal.constructor.name.replace('LiteralTree', ''),
    );
    if (declaration instanceof InterfaceDeclarationMetadata) {
      return declaration.attributes();
    }
    Issue.errorFromTree(this.node, `Couldn't find suitable literal type`);
  }
}
