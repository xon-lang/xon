import { TestTree } from '../../tree/test/test.tree';
import { createFunctionType, createLiteralType } from '../../tree/type/type-tree.helper';
import { BaseInference } from '../base.inference';
import { getExpressionInference } from '../expression/expression-inference.helper';
import { ExpressionInference } from '../expression/expression.inference';
import { GenericsMap } from '../generics-map';
import { popScope, pushScope } from '../id-scope';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class TestInference extends BaseInference {
  public name: ExpressionInference;

  public body: StatementInference[];

  public constructor(public tree: TestTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = getExpressionInference(tree.name, genericsMap);
    this.type = createFunctionType([], [this.name.type], createLiteralType(null));
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
