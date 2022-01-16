import { Issue } from '../../../issue-service/issue';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ModelDeclarationMetadata } from '../../declaration/model/model-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { IdExpressionMetadata } from '../id/id-expression-metadata';

export class LiteralExpressionMetadata implements ExpressionMetadata {
  name: string;
  value: string | number | RegExp;

  constructor(private node: LiteralExpressionTree, private scope: DeclarationScope) {
    this.name = this.node.literal.constructor.name.replace('LiteralTree', '');
    this.value = this.node.literal.value;
  }

  attributes(): DeclarationMetadata[] {
    const declaration = this.scope.findByName(this.name);
    if (declaration instanceof ModelDeclarationMetadata) {
      return declaration.attributes();
    }
    Issue.errorFromTree(this.node, `Couldn't find suitable literal type`);
  }

  is(other: ExpressionMetadata): boolean {
    if (other instanceof LiteralExpressionMetadata) {
      return this.name === other.name && this.value === other.value;
    }
    if (other instanceof IdExpressionMetadata) {
      const otherDeclaration = other.declaration();
      const declaration = this.scope.findByName(this.name, (x) => x.isCoreDeclaration);
      return otherDeclaration.isCoreDeclaration && declaration.is(otherDeclaration);
    }
    return false;
  }
}
