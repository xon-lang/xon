import { ParameterTree } from '../../../tree/parameter/parameter.tree';
import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { TypeMetadata } from '../type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  genericArguments: TypeMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  returnType?: TypeMetadata;

  constructor(tree: FunctionTypeTree, genericArguments: TypeMetadata[]) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
    this.genericArguments = genericArguments;
    this.parameters = tree.parameters.map((x) => new ParameterMetadata(x));
    this.returnType = tree.returnType?.typeMetadata;
  }
}

export class ParameterMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  type: TypeMetadata;

  constructor(tree: ParameterTree) {
    super();

    this.sourceReference = tree.id.sourceReference;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
