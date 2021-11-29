import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class-definition-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(
    public parameters: { name?: string; type: TypeMetadata }[],
    public resultType: TypeMetadata | null,
    public scope: DeclarationScope,
  ) {
    super();
    this.declaration = scope.get('Function') as ClassDefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (other instanceof FunctionTypeMetadata)
      return (
        this.parameters.length === other.parameters.length &&
        this.parameters.every((x, i) => x.type.is(other.parameters[i].type)) &&
        (!this.resultType || this.resultType.is(other.resultType))
      );
    return false;
  }

  static fromTree(tree: FunctionTypeTree, scope: DeclarationScope): FunctionTypeMetadata {
    const parameters = tree.parameters.map((x) => ({
      name: x.id.text,
      type: getTypeMetadata(x.type, scope),
    }));
    const resultType = tree.resultType ? getTypeMetadata(tree.resultType, scope) : null;
    const metadata = new FunctionTypeMetadata(parameters, resultType, scope);
    return metadata;
  }
}
