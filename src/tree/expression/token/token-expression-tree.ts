import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export enum TokenType {
  ID = 'ID',
  STRING = 'STRING',
  INTEGER = 'INTEGER',
  OPERATOR = 'OPERATOR',
  UNEXPECTED = 'UNEXPECTED',
  WHITESPACE = 'WHITESPACE',
  LINE_JOINING = 'LINE_JOINING',
}

export class TokenExpressionTree extends ExpressionTree {
  constructor(public name: TokenTree, public type: TokenType) {
    super(name.sourceSpan);
    this.addChildren(name);
  }
}
