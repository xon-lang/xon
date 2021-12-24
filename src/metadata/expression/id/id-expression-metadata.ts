import { IdExpressionNode } from '../../../ast/expression/id/id-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ObjectDeclarationMetadata } from '../../declaration/object/object-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private node: IdExpressionNode, private scope: DeclarationScope) {}

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.node.id.name.text);
  }

  attributes(): DeclarationMetadata[] {
    const declaration = this.declaration();
    if (
      declaration instanceof InterfaceDeclarationMetadata ||
      declaration instanceof ObjectDeclarationMetadata
    ) {
      return declaration.attributes();
    }
    if (declaration instanceof AttributeDeclarationMetadata) {
      return declaration.type().attributes();
    }

    throw new Error('Not implemented');
  }
}
