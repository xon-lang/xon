import { ExpressionParameterTree } from '../../../tree/expression-parameter/expression-parameter.tree';
import { SourceReference } from '../../../tree/source-reference';
import { TypeMetadata } from '../type-metadata';

export class ParameterTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  type: TypeMetadata;

  constructor(tree: ExpressionParameterTree) {
    super();

    this.sourceReference = tree.id.sourceReference;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
