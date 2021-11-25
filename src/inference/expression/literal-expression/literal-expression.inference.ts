import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { CharLiteralTree } from '../../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../../tree/literal/string-literal/string-literal.tree';
import { ExpressionInference } from '../expression.inference';

export class LiteralExpressionInference extends ExpressionInference {
  constructor(public tree: LiteralExpressionTree) {
    super();

    if (tree.literal instanceof IntegerLiteralTree) this.type = createPlainType('Integer');
    else if (tree.literal instanceof FloatLiteralTree) this.type = createPlainType('Float');
    else if (tree.literal instanceof CharLiteralTree) this.type = createPlainType('Char');
    else if (tree.literal instanceof StringLiteralTree) this.type = createPlainType('String');
    else throw new Error('Wrong literal type');
  }
}
