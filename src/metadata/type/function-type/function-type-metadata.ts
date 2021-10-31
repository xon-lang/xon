import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { ParameterTypeMetadata } from '../parameter-type/parameter-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  genericArguments: TypeMetadata[] = [];
  parameters: ParameterTypeMetadata[] = [];
  returnType?: TypeMetadata;

  constructor(tree: FunctionTypeTree, genericArguments: TypeMetadata[]) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
    this.genericArguments = genericArguments;
    this.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    this.returnType = tree.returnType?.typeMetadata;
  }
}
