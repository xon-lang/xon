import { LiteralExpressionNode } from '../../../ast/expression/literal/literal-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata implements ExpressionMetadata {
  constructor(private node: LiteralExpressionNode, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    const declaration = this.scope.findByName<InterfaceDeclarationMetadata>(
      this.node.literal.constructor.name.replace('LiteralNode', ''),
    );
    return declaration.attributes();
  }
}
