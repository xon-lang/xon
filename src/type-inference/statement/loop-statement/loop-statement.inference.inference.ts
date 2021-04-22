import { LoopStatementTree } from '../../../tree/statement/loop-statement/loop-statement.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { fillExpressionTypes } from '../../expression/expression-inference.helper';
import { GenericsMap } from '../../generics-map';
import { addToScope, popScope, pushScope } from '../../id-scope';
import { fillStatementTypes } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class LoopStatementInference extends StatementInference {
  public constructor(public tree: LoopStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.expression, this.genericsMap);
    pushScope();

    if (this.tree.expression) {
      if (!(this.tree.expression.type instanceof ArrayTypeTree))
        throw new Error('Expression must be array');

      this.tree.value.type = this.tree.expression.type.itemType;
      addToScope(this.tree.value.name, this.tree.value.type);

      if (this.tree.index) {
        this.tree.index.type = createPlainType('Integer');
        addToScope(this.tree.index.name, this.tree.index.type);
      }
    }

    this.tree.body.forEach((x) => fillStatementTypes(x, this.genericsMap));

    popScope();
  }
}
