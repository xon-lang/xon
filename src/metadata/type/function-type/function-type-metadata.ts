import { IdToken } from '../../../tree/id-token';
import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { ParameterTypeMetadata } from '../parameter-type/parameter-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  genericParameters: IdToken[];
  genericArguments: TypeMetadata[] = [];
  parameters: ParameterTypeMetadata[] = [];
  returnType?: TypeMetadata;

  private tree: FunctionTypeTree;

  constructor(tree: FunctionTypeTree) {
    super();

    if (!tree) return;
    this.tree = tree;
    this.genericParameters = tree.genericParameters;
    this.sourceReference = tree.sourceReference;
    this.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    this.returnType = tree.returnType?.typeMetadata;
  }

  cloneWithGenerics(genericArguments: TypeMetadata[]): FunctionTypeMetadata {
    const metadata = new FunctionTypeMetadata(this.tree);
    metadata.genericArguments = genericArguments;
    return metadata;
  }
}
