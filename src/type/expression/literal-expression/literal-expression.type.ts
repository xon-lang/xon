import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { BooleanLiteralTree } from '../../../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../../tree/literal/string-literal/string-literal.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { ExpressionType } from '../expression.type';

export class LiteralExpressionType extends ExpressionType {
  public constructor(public tree: LiteralExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    if (this.tree.literal instanceof BooleanLiteralTree) return createPlainType('Boolean');
    if (this.tree.literal instanceof IntegerLiteralTree) return createPlainType('Integer');
    if (this.tree.literal instanceof FloatLiteralTree) return createPlainType('Float');
    if (this.tree.literal instanceof CharLiteralTree) return createPlainType('Char');
    if (this.tree.literal instanceof StringLiteralTree) return createPlainType('String');

    throw new Error('Wrong literal type');
  }
}
