import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class AndExpressionMetadata implements ExpressionMetadata {
  constructor(private tree: InfixExpressionTree, private scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(tree.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(tree.right, scope).type;
    // const attributeType = declaration.attribute(tree.id.text, [], [rightType], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): ParameterDeclarationMetadata[] {
    return [];
    // const left  = getExpressionMetadata(this.tree.left, this.scope)
    // const right  = getExpressionMetadata(this.tree.right, this.scope)
    // left.attributes().filter(x=>)
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
