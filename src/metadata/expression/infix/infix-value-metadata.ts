import { Any } from '~/lib/core';
import { OperatorMetadata } from '~/metadata/declaration/infix-operator/infix-operator-declaration-metadata';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-declaration-metadata';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { MethodTypeMetadata } from '~/metadata/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { InfixNode } from '~/tree/expression/infix/infix-expression-tree';
import { escapeToString } from '~/util/evaluate';

export class InfixValueMetadata extends ValueMetadata {
  constructor(private tree: InfixNode) {
    super();
    getExpressionMetadata(tree.left);
    getExpressionMetadata(tree.right);
    tree.operator.metadata = this.operatorDeclaration();
  }

  private operatorDeclaration(): ParameterMetadata | null {
    const leftMetadata = this.tree.left.metadata;
    const rightMetadata = this.tree.right.metadata;

    if (!(leftMetadata instanceof ValueMetadata && rightMetadata instanceof ValueMetadata)) {
      throw new Error('Not implemented');
    }

    const declarations = this.tree.scope.filter(this.tree.operator.text, (x) => {
      if (!(x instanceof OperatorMetadata && x.type instanceof MethodTypeMetadata) || x.type.parameters.length !== 2) {
        return false;
      }

      const [left, right] = x.type.parameters;

      return (
        (left.type && right.type && leftMetadata.type()?.is(left.type) && rightMetadata.type()?.is(right.type)) || false
      );
    });

    if (declarations.length === 1) {
      return declarations[0] as ParameterMetadata;
    }
    if (declarations.length > 0) {
      this.tree.operator.addError('Too many declarations');
    } else {
      this.tree.operator.addError('No declarations found');
    }

    return null;
  }

  type(): TypeMetadata | null {
    if (this.tree.operator.metadata?.type instanceof MethodTypeMetadata) {
      return this.tree.operator.metadata.type.resultType;
    }

    return null;
  }

  eval(): Any {
    const leftMetadata = this.tree.left.metadata;
    const rightMetadata = this.tree.right.metadata;

    if (leftMetadata instanceof ValueMetadata && rightMetadata instanceof ValueMetadata) {
      const left = leftMetadata.eval();
      const right = rightMetadata.eval();
      if (this.tree.operator.text === '^' && typeof left === 'number' && typeof right === 'number') {
        return left ** right;
      }

      // eslint-disable-next-line no-eval
      return eval(`${escapeToString(left)} ${this.tree.operator.text} ${escapeToString(right)}`);
    }
    throw new Error('Not implemented');
  }
}
