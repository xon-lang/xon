import { TokenExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export enum TokenType {
  UNEXPECTED = 0,
  ID = 1,
  OPERATOR = 2,
  INTEGER = 3,
  STRING = 4,
  WHITESPACE = 5,
}

export class TokenExpressionTree extends ExpressionTree {
  constructor(public name: TokenTree, public type: TokenType) {
    super(name.sourceSpan);
    this.addChildren(name);
  }
}

export function getTokenExpressionTree(ctx: TokenExpressionContext): TokenExpressionTree {
  let type = TokenType.UNEXPECTED;
  if (ctx.ID()) {
    type = TokenType.ID;
  } else if (ctx.OPERATOR()) {
    type = TokenType.OPERATOR;
  } else if (ctx.INTEGER()) {
    type = TokenType.INTEGER;
  } else if (ctx.STRING()) {
    type = TokenType.STRING;
  } else {
    type = TokenType.UNEXPECTED;
  }
  const name = TokenTree.from(ctx._name ?? ctx.UNEXPECTED());
  return new TokenExpressionTree(name, type);
}
