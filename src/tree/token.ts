import { ParserRuleContext, Token as AntlrToken } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

type TokenVariant = AntlrToken | TerminalNode | ParserRuleContext;

export class TokenTree extends Tree {
  text: String2;

  constructor(sourceSpan: SourceSpan) {
    super(sourceSpan);
    // make property wih caching
    this.text = this.sourceSpan.getText();
  }

  static from(token: TokenVariant | TokenVariant[]): TokenTree {
    if (Array.isArray(token)) {
      return new TokenTree(SourceSpan.fromTwoAntlrTokens(getToken(token[0]), getToken(token[token.length - 1])));
    }

    return new TokenTree(SourceSpan.fromToken(getToken(token)));
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
