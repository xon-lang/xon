import { Any } from '~/lib/core';
import { OperatorMetadata } from '~/metadata/declaration/infix-operator/infix-operator-declaration-metadata';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-declaration-metadata';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { MethodTypeMetadata } from '~/metadata/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { escapeToString } from '~/util/evaluate';

export class PrefixValueMetadata extends ValueMetadata {
  constructor(private tree: PrefixExpressionTree) {
    super();

    getExpressionMetadata(tree.value);
    tree.name.metadata = this.operatorDeclaration();
  }

  private operatorDeclaration(): ParameterMetadata | null {
    const declarations = this.tree.scope.filter(this.tree.name.text, (x) => {
      if (!(x instanceof OperatorMetadata)) return false;

      const { type } = x;
      if (!(type instanceof MethodTypeMetadata)) return false;

      const { parameters } = type;
      if (parameters.length !== 1) return false;

      const { metadata } = this.tree.value;
      if (metadata instanceof ValueMetadata) {
        return (parameters[0].type && metadata.type()?.is(parameters[0].type)) || false;
      }

      return false;
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
    const { metadata } = this.tree.value;
    if (metadata instanceof ValueMetadata) {
      const value = metadata.eval();

      // eslint-disable-next-line no-eval
      return eval(`${this.tree.name.text} ${escapeToString(value)}`);
    }

    return null;
  }
}
