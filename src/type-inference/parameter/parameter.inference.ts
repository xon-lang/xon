import { ExpressionParameterTree } from '../../tree/expression-parameter/expression-parameter.tree';
import { GenericsMap } from '../generics-map';
import { StatementInference } from '../statement/statement.inference';

export class ParameterInference extends StatementInference {
  name: string;

  isPrivate: boolean;

  public metaType?: string;

  constructor(public tree: ExpressionParameterTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.id;
    this.isPrivate = tree.isPrivate;
    this.type = tree.type.useGenericsMap(genericsMap);
    this.metaType = tree.metaType;
  }
}
