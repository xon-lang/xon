import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { ParameterTypeMetadata } from '../parameter-type/parameter-type-metadata';
import { TypeMetadata } from '../type-metadata';
import { getDefinitionMetadata } from '../type-metadata-helper';

export class FunctionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  genericArguments: TypeMetadata[] = [];
  parameters: ParameterTypeMetadata[] = [];
  returnType?: TypeMetadata;

  constructor(tree: FunctionTypeTree, genericArguments: TypeMetadata[]) {
    super();

    this.name = this.constructor.name.replace(TypeMetadata.name, '');
    this.genericArguments = genericArguments;
    if (!tree) return;

    this.sourceReference = tree.sourceReference;
    this.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    this.returnType = tree.returnType?.typeMetadata;
  }

  static fromClassDefinitionTree(
    tree: ClassDefinitionTree,
    genericArguments: TypeMetadata[],
  ): FunctionTypeMetadata {
    const metadata = new FunctionTypeMetadata(null, genericArguments);
    metadata.sourceReference = tree.sourceReference;
    metadata.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    metadata.returnType = getDefinitionMetadata(tree, genericArguments);
    return metadata;
  }
}
