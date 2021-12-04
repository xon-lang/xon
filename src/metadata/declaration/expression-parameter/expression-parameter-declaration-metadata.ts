import { ParameterTree } from '../../../tree/parameter/parameter.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ExpressionParameterMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ParameterTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(typeArguments: TypeMetadata[]): TypeMetadata {
    return getTypeMetadata(this.tree.type, this.scope);
  }
}
