import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { SourceReference } from '../../../tree/source-reference';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { ParameterTypeMetadata } from '../parameter-type/parameter-type-metadata';
import { TypeMetadata } from '../metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  parameters: ParameterTypeMetadata[] = [];
  returnType?: TypeMetadata;

  constructor(tree: FunctionTypeTree | ClassDefinitionTree) {
    super();

    if (!tree) return;
    this.sourceReference = tree.sourceReference;
    this.name = 'Function';
    this.parameters = tree.parameters.map((x) => new ParameterTypeMetadata(x));
    if (tree instanceof FunctionTypeTree) this.returnType = tree.returnType?.typeMetadata;
  }
}
