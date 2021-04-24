import { Issue } from '../../../issue-service/issue';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionInference } from '../expression.inference';

export class IdExpressionInference extends ExpressionInference {
  public name: string;

  public constructor(public tree: IdExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.type = find(tree.name);
    if (!this.type) throw Issue.errorFromTree(tree, `Couldn't find "${tree.name}"`);
  }
}
