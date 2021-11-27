import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class FunctionTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  parameters: { name?: string; type: TypeMetadata }[];
  resultType?: TypeMetadata;

  constructor(tree?: FunctionTypeTree, scope?: DeclarationScope) {
    super();
    if (!tree) return;

    this.name = tree.name;
    this.declaration = scope.get(this.name) as ClassDeclarationMetadata;
    this.parameters = tree.parameters.map((x) => ({
      name: x.id.text,
      type: getTypeMetadata(x.type, scope),
    }));
    this.resultType = tree.resultType ? getTypeMetadata(tree.resultType, scope) : null;
  }

  static fromParams(
    name: string,
    declaration: ClassDeclarationMetadata,
    parameters: { name?: string; type: TypeMetadata }[],
    resultType?: TypeMetadata,
  ): FunctionTypeMetadata {
    const metadata = new FunctionTypeMetadata();
    metadata.name = name;
    metadata.declaration = declaration;
    metadata.parameters = parameters;
    metadata.resultType = resultType;
    return metadata;
  }
}
