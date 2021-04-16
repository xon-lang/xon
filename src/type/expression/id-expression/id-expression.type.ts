import { Issue } from '../../../issue-service/issue';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionType } from '../expression.type';

export class IdExpressionType extends ExpressionType {
  public constructor(public tree: IdExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.type = find(this.tree.name);
    if (!this.tree.type)
      throw Issue.errorFromTree(this.tree, `Couldn't find "${this.tree.name}"`).toError();
  }
}
