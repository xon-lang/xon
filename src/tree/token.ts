import { ParserRuleContext, Token as AntlrToken } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

type TokenVariant = AntlrToken | TerminalNode | ParserRuleContext;

export class TokenTree extends Tree {
  text: String2;

  constructor(token: TokenVariant | TokenVariant[]) {
    if (Array.isArray(token)) {
      super(SourceSpan.fromTwoTokens(getToken(token[0]), getToken(token[token.length - 1])));
    } else {
      super(SourceSpan.fromToken(getToken(token[0])));
    }
    this.text = this.sourceSpan.getText();
  }

  static from(token: TokenVariant | TokenVariant[]): TokenTree {
    return new TokenTree(token);
  }
}

function getToken(token: TokenVariant): AntlrToken {
  if (token instanceof ParserRuleContext) {
    return token.start;
  } else if (token instanceof TerminalNode) {
    return token.payload;
  } else {
    return token;
  }
}
