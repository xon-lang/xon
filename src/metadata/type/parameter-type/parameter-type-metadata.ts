import { ExpressionParameterTree } from '../../../tree/expression-parameter/expression-parameter.tree';
import { SourceReference } from '../../../tree/source-reference';
import { TypeInfo } from '../type-info';

export class ParameterTypeMetadata extends TypeInfo {
  sourceReference: SourceReference;
  name: string;
  type: TypeInfo;

  constructor(tree: ExpressionParameterTree) {
    super();

    this.sourceReference = tree.id.sourceReference;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
