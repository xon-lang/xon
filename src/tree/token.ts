import { ParserRuleContext, Token as AntlrToken } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

// rename to token tree
export class TokenTree extends Tree {
  text: String2;

  constructor(token: AntlrToken | TerminalNode | ParserRuleContext) {
    if (token instanceof ParserRuleContext) {
      super(SourceSpan.fromContext(token));
    } else if (token instanceof TerminalNode) {
      super(SourceSpan.fromToken(token.payload));
    } else {
      super(SourceSpan.fromToken(token));
    }
    this.text = token.text ?? '';
  }

  static from(token: AntlrToken | TerminalNode | ParserRuleContext): TokenTree {
    return new TokenTree(token);
  }
}
