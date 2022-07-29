import { Any, Unknown } from '../../../../lib/core';
import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { OperatorMetadata } from '../../../declaration/operator/operator-metadata';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class InfixValueMetadata extends ValueMetadata {
  constructor(private tree: InfixExpressionTree) {
    super();
    fillValueMetadata(tree.left);
    fillValueMetadata(tree.right);
    tree.name.metadata = this.operatorDeclaration();
  }

  private operatorDeclaration(): ParameterMetadata | null {
    const leftMetadata = this.tree.left.metadata;
    const rightMetadata = this.tree.right.metadata;

    if (!(leftMetadata instanceof ValueMetadata && rightMetadata instanceof ValueMetadata)) {
      throw new Error('Not implemented');
    }

    const declarations = this.tree.scope.filter(this.tree.name.text, (x) => {
      if (
        !(x instanceof OperatorMetadata && x.type instanceof MethodTypeMetadata) ||
        x.type.parameters.length !== 2
      ) {
        return false;
      }

      const [left, right] = x.type.parameters;
      return leftMetadata.type().is(left.type) && rightMetadata.type().is(right.type);
    });

    if (declarations.length === 1) {
      return declarations[0] as ParameterMetadata;
    }
    if (declarations.length > 0) {
      this.tree.name.addError('Too many declarations');
    } else {
      this.tree.name.addError('No declarations found');
    }
    return null;
  }

  type(): TypeMetadata | null {
    if (this.tree.name.metadata?.type instanceof MethodTypeMetadata) {
      return this.tree.name.metadata.type.resultType;
    }
    return null;
  }

  eval(): Any {
    const leftMetadata = this.tree.left.metadata;
    const rightMetadata = this.tree.right.metadata;

    if (leftMetadata instanceof ValueMetadata && rightMetadata instanceof ValueMetadata) {
      const left = leftMetadata.eval();
      const right = rightMetadata.eval();
      if (this.tree.name.text === '^') {
        return Math.pow(left, right);
      }
      const escapeIfString = (s: Unknown) => (typeof s === 'string' && `\`${s}\``) || s;
      return eval(`${escapeIfString(left)} ${this.tree.name} ${escapeIfString(right)}`);
    }
    throw new Error('Not implemented');
  }
}
