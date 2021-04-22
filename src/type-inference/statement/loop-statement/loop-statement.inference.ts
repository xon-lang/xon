import { LoopStatementTree } from '../../../tree/statement/loop-statement/loop-statement.tree';
import { GenericsMap } from '../../generics-map';
import { popScope, pushScope } from '../../id-scope';
import { getStatementInference } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class LoopStatementInference extends StatementInference {
  public body: StatementInference[];

  public constructor(public tree: LoopStatementTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
