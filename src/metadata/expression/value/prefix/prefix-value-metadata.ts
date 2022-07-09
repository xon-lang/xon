import { Any, None, none, Unknown } from '../../../../lib/core';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class PrefixValueMetadata extends ValueMetadata {
  constructor(private tree: PrefixExpressionTree, private scope: DeclarationScope) {
    super();

    tree.value.metadata = getValueMetadata(tree.value, scope);
    tree.name.metadata = this.operatorDeclaration();
  }

  private operatorDeclaration(): ParameterMetadata | None {
    const declarations = this.scope.filter(this.tree.name.text, (x) => {
      if (!(x instanceof ParameterMetadata)) return false;

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
    return none;
  }

  type(): TypeMetadata | None {
    if (this.tree.name.metadata?.type instanceof MethodTypeMetadata) {
      return this.tree.name.metadata.type.resultType;
    }
    return none;
  }

  eval(): Any {
    const metadata = this.tree.value.metadata;
    if (metadata instanceof ValueMetadata) {
      const value = metadata.eval();
      const escapeIfString = (s: Unknown) => (typeof s === 'string' && `\`${s}\``) || s;
      return eval(`${this.tree.name} ${escapeIfString(value)}`);
    }
    return none;
  }
}
