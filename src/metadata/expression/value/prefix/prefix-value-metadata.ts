import { Any, Unknown } from '../../../../lib/core';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { OperatorMetadata } from '../../../declaration/operator/operator-metadata';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class PrefixValueMetadata extends ValueMetadata {
  constructor(private tree: PrefixExpressionTree) {
    super();

    fillValueMetadata(tree.value);
    tree.name.metadata = this.operatorDeclaration();
  }

  private operatorDeclaration(): ParameterMetadata | null {
    const declarations = this.tree.scope.filter(this.tree.name.text, (x) => {
      if (!(x instanceof OperatorMetadata)) return false;

      const type = x.type;
      if (!(type instanceof MethodTypeMetadata)) return false;

      const parameters = type.parameters;
      if (parameters.length !== 1) return false;

      const metadata = this.tree.value.metadata;
      if (metadata instanceof ValueMetadata) {
        return metadata.type().is(parameters[0].type);
      }
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
    const metadata = this.tree.value.metadata;
    if (metadata instanceof ValueMetadata) {
      const value = metadata.eval();
      const escapeIfString = (s: Unknown) => (typeof s === 'string' && `\`${s}\``) || s;
      return eval(`${this.tree.name} ${escapeIfString(value)}`);
    }
    return null;
  }
}
