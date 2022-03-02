import { Issue } from '../../../issue-service/issue';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { DefinitionDeclarationMetadata } from '../../declaration/definition/definition-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';
import { IdExpressionMetadata } from '../id/id-expression-metadata';

export class LiteralExpressionMetadata implements ExpressionMetadata {
  name: string;
  value: string | number | RegExp;

  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    this.name = this.tree.literal.constructor.name.replace('LiteralTree', '');
    this.value = this.tree.literal.value;
  }

  attributes(): AttributeDeclarationMetadata[] {
    const declaration = this.scope.findByName(this.name);
    if (declaration instanceof DefinitionDeclarationMetadata) {
      return declaration.attributes();
    }
    Issue.errorFromTree(this.tree, `Couldn't find suitable literal type`);
  }

  is(other: ExpressionMetadata): boolean {
    if (other instanceof LiteralExpressionMetadata) {
      return this.name === other.name && this.value === other.value;
    }
    if (other instanceof IdExpressionMetadata) {
      const declaration = this.scope.core.findByName(this.name);
      return declaration.is(other.declaration());
    }
    return false;
  }
}
