import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class FunctionTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(
    public parameters: { name?: string; type: TypeMetadata }[],
    public resultType: TypeMetadata,
    public scope: DeclarationScope,
  ) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDeclarationMetadata;
  }

  static fromTree(tree: FunctionTypeTree, scope: DeclarationScope) {
    const parameters = tree.parameters.map((x) => ({
      name: x.id.text,
      type: getTypeMetadata(x.type, scope),
    }));
    const resultType = tree.resultType ? getTypeMetadata(tree.resultType, scope) : null;
    const metadata = new FunctionTypeMetadata(parameters, resultType, scope);
    return metadata;
  }
}
