import { ParameterTree } from '../../tree/parameter/parameter.tree';
import { GenericsMap } from '../generics-map';
import { StatementInference } from '../statement/statement.inference';

export class ParameterInference extends StatementInference {
  public name: string;

  public isPrivate: boolean;

  public metaType?: string;

  public constructor(public tree: ParameterTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.isPrivate = tree.isPrivate;
    this.type = tree.type.useGenericsMap(genericsMap);
    this.metaType = tree.metaType;
  }
}
