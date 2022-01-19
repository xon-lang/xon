import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class InfixExpressionMetadata implements ExpressionMetadata {
  constructor(private node: InfixExpressionTree, private scope: DeclarationScope) {}

  attributes(): ParameterDeclarationMetadata[] {
    const left = getExpressionMetadata(this.node.left, this.scope);
    const right = getExpressionMetadata(this.node.right, this.scope);
    const attributes = left
      .attributes()
      .filter((x) => x.name === this.node.id.text && x.type().is(right));
    if (attributes.length > 1) throw new Error('To many attributes');
    if (attributes.length === 0) throw new Error('Not found');
    return attributes[0].type().attributes();
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
