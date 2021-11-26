import { FunctionTypeTree } from '../../../../tree/type/function-type/function-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class FunctionTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  parameters: { name?: string; type: TypeMetadata }[];
  returnType?: TypeMetadata;

  constructor(tree: FunctionTypeTree, scope: DeclarationScope) {
    super();

    this.name = tree.name;
    this.declaration = scope.get(this.name) as ClassDeclarationMetadata;
    this.parameters = tree.parameters.map((x) => ({
      name: x.id.text,
      type: getTypeMetadata(x.type, scope),
    }));
    this.returnType = tree.returnType ? getTypeMetadata(tree.returnType, scope) : null;
  }
}
