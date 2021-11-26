import { ClassDefinitionTree } from '../../../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../../../tree/id-token';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  id: IdToken;

  constructor(private tree: ClassDefinitionTree, scope: DeclarationScope) {
    super();

    this.id = tree.id;
  }

  init(typeArguments: TypeMetadata[], scope: DeclarationScope) {
    const initParameters = this.tree.parameters
      ? this.tree.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, scope),
        }))
      : [];
    const initResultType = IdTypeMetadata.fromParams(this.id.text, this, typeArguments);
    return FunctionTypeMetadata.fromParams(this.id.text, this, initParameters, initResultType);
  }
}
