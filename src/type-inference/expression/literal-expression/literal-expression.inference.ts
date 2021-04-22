import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { BooleanLiteralTree } from '../../../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../../tree/literal/string-literal/string-literal.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { ExpressionInference } from '../expression.inference';

export class LiteralExpressionInference extends ExpressionInference {
  public constructor(public tree: LiteralExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    if (this.tree.literal instanceof BooleanLiteralTree)
      this.tree.type = createPlainType('Boolean');
    else if (this.tree.literal instanceof IntegerLiteralTree)
      this.tree.type = createPlainType('Integer');
    else if (this.tree.literal instanceof FloatLiteralTree)
      this.tree.type = createPlainType('Float');
    else if (this.tree.literal instanceof CharLiteralTree) this.tree.type = createPlainType('Char');
    else if (this.tree.literal instanceof StringLiteralTree)
      this.tree.type = createPlainType('String');
    else throw new Error('Wrong literal type');
  }
}
