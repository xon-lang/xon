import { LambdaTypeTree } from '../../../tree/type/lambda/lambda-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class LambdaTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(
    public parameters: { name?: string; type: TypeMetadata }[],
    public resultType: TypeMetadata | null,
    public scope: DeclarationScope,
  ) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (other instanceof LambdaTypeMetadata)
      return (
        this.parameters.length === other.parameters.length &&
        this.parameters.every((x, i) => x.type.is(other.parameters[i].type)) &&
        (!this.resultType || this.resultType.is(other.resultType))
      );
    return false;
  }

  static fromTree(tree: LambdaTypeTree, scope: DeclarationScope): LambdaTypeMetadata {
    const parameters = tree.parameters.map((x) => ({
      name: x.id.text,
      type: getTypeMetadata(x.type, scope),
    }));
    const resultType = tree.resultType ? getTypeMetadata(tree.resultType, scope) : null;
    const metadata = new LambdaTypeMetadata(parameters, resultType, scope);
    return metadata;
  }
}
