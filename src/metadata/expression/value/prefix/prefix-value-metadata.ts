import { Any2 } from '~/lib';
import {
  fillValueMetadata,
  MethodTypeMetadata,
  OperatorMetadata,
  ParameterMetadata,
  TypeMetadata,
  ValueMetadata,
} from '~/metadata';
import { PrefixExpressionTree } from '~/tree';
import { escapeToString } from '~/util';

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

  eval(): Any2 {
    const metadata = this.tree.value.metadata;
    if (metadata instanceof ValueMetadata) {
      const value = metadata.eval();
      // eslint-disable-next-line no-eval
      return eval(`${this.tree.name} ${escapeToString(value)}`);
    }
    return null;
  }
}
