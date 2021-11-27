import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ClassDefinitionTree, private scope: DeclarationScope) {
    super();
    this.name = tree.id.text;
  }

  baseType(): IdTypeMetadata | null {
    if (!this.tree.baseType) return null;
    return getTypeMetadata(this.tree.baseType, this.scope) as IdTypeMetadata;
  }

  init(typeArguments: TypeMetadata[]): FunctionTypeMetadata {
    const initParameters = this.tree.parameters
      ? this.tree.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, this.scope),
        }))
      : [];
    const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
    return new FunctionTypeMetadata(initParameters, initResultType, this.scope);
  }

  get(
    name: string,
    typeParametersCount: number,
    expressionParameters: TypeMetadata[],
  ): TypeMetadata {
    this.tree.attributes.filter((x) => x.id.text === name);
  }
}
