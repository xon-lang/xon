import { ParameterTree } from '../../../tree/parameter/parameter.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  name: string;
  type: TypeMetadata;

  constructor(private tree: ParameterTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.type = getTypeMetadata(this.tree.type, this.scope);
  }

  toString() {
    return `${this.name} ${this.type}`;
  }
}
