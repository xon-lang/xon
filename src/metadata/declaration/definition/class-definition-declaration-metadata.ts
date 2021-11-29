import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DefinitionDeclarationMetadata } from './definition-declaration-metadata';

export class ClassDefinitionDeclarationMetadata extends DefinitionDeclarationMetadata {
  attributes: AttributeTree[] = [];
  name: string;

  constructor(protected tree: ClassDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.attributes = tree.attributes;
  }

  ancestor(): IdTypeMetadata {
    if (!this.tree.baseType) return null;
    return getTypeMetadata(this.tree.baseType, this.scope) as IdTypeMetadata;
  }

  type(typeArguments: TypeMetadata[]): FunctionTypeMetadata {
    const initParameters = this.tree.parameters
      ? this.tree.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, this.scope),
        }))
      : [];
    const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
    return new FunctionTypeMetadata(initParameters, initResultType, this.scope);
  }
}
