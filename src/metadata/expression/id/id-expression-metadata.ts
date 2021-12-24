import { IdExpressionNode } from '../../../ast/expression/id/id-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private node: IdExpressionNode, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    const declaration = this.scope.findByName<InterfaceDeclarationMetadata>(this.node.id.name.text);
    return declaration.attributes();
  }
}
