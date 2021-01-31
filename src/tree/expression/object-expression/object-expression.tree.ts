import { ObjectExpressionContext } from '../../../grammar/xon-parser';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';

function getKeyByString(name: string): LiteralExpressionTree {
  const stringLiteral = new StringLiteralTree();
  stringLiteral.value = name;
  const literalExpression = new LiteralExpressionTree();
  literalExpression.literal = stringLiteral;
  return literalExpression;
}

function getKeyByValueExpression(tree: ExpressionTree): LiteralExpressionTree {
  if (tree instanceof IdExpressionTree) return getKeyByString(tree.name);
  if (tree instanceof FunctionExpressionTree && tree.object instanceof IdExpressionTree)
    return getKeyByString(tree.object.name);
  return getKeyByString(tree.ctx.text);
}

export class ObjectExpressionTree extends ExpressionTree {
  items: { value: ExpressionTree; key: ExpressionTree; hasSpread: boolean }[];

  constructor(public ctx?: ObjectExpressionContext) {
    super();
    if (!ctx) return;
    this.items = ctx
      .objectItem()
      .map((x) => ({
        item: x,
        value: getExpressionTree(x.spreadItem()?.expression() || x._exprVal),
        key:
          (x._exprkey && getExpressionTree(x._exprkey)) || (x.ID() && getKeyByString(x.ID().text)),
        hasSpread: !!x.spreadItem()?.Elipsis(),
      }))
      .map((x) => ({
        value: x.value,
        key: x.hasSpread ? undefined : x.key || getKeyByValueExpression(x.value),
        hasSpread: x.hasSpread,
      }));
  }
}
