import { ExpressionParameterTree } from '../../../tree/expression-parameter/expression-parameter.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ExpressionParameterMetadata extends DeclarationMetadata {
  name: string;
  type: TypeMetadata;

  constructor(private tree: ExpressionParameterTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.type = getTypeMetadata(tree.type, scope);
  }
}
