import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { ParameterTypeMetadata } from '../parameter-type/parameter-type-metadata';
import { TypeInfo } from '../type-info';

export class FunctionTypeMetadata extends TypeInfo {
  sourceReference: SourceReference;
  name: string;
  parameters: ParameterTypeMetadata[] = [];
  returnType?: TypeInfo;

  constructor(tree: FunctionTypeTree | ClassDefinitionTree) {
    super();

    if (!tree) return;
    this.sourceReference = tree.sourceReference;
    this.name = 'Function';
    this.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    if (tree instanceof FunctionTypeTree) this.returnType = tree.returnType?.typeMetadata;
  }
}
