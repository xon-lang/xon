import { ForStatementTree } from '../../../tree/statement/for-statement/for-statement.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { createPlainType } from '../../../tree/type/type-tree.helper';
import { TypeTree } from '../../../tree/type/type.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { addToScope, popScope, pushScope } from '../../id-scope';
import { getStatementInference } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class ForStatementInference extends StatementInference {
  value: { name: string; type: TypeTree };
  
  index: { name: string; type: Type
  
  expression: ExpressionInference;

  public body: StatementInference[];

  constructor(public tree: ForStatementTree, public genericsMap: GenericsMap) {
    super();

    this.expression = getExpressionInference(tree.expression, this.genericsMap);
    pushScope();

    if (!(this.expression.type instanceof ArrayTypeTree))
      throw new Error('Expression must be array');

    if (tree.indexVarName) {
      this.index = { name: tree.indexVarName, type: createPlainType('Integer') };
      addToScope(tree.indexVarName, this.index.type);
    }

    if (tree.valueVarName) {
      this.value = { name: tree.valueVarName, type: this.expression.type.itemType };
      addToScope(tree.valueVarName, this.value.type);
    }

    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));

    popScope();
  }
}
