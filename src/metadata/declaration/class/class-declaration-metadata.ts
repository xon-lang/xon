import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ClassDefinitionTree) {
    super();

    this.name = tree.id.text;
  }

  init(typeArguments: TypeMetadata[], scope: DeclarationScope): FunctionTypeMetadata {
    const initParameters = this.tree.parameters
      ? this.tree.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, scope),
        }))
      : [];
    const initResultType = new IdTypeMetadata(this.name, typeArguments, scope);
    return new FunctionTypeMetadata(initParameters, initResultType, scope);
  }
}
