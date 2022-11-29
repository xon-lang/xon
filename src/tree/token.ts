import { ParserRuleContext, Token as AntlrToken } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

export class Token extends Tree {
  sourceSpan: SourceSpan;
  metadata: DeclarationMetadata | null = null;
  text: String2;

  constructor(token: AntlrToken | TerminalNode | ParserRuleContext) {
    super();
    if (token instanceof ParserRuleContext) {
      this.sourceSpan = SourceSpan.fromContext(token);
    } else if (token instanceof TerminalNode) {
      this.sourceSpan = SourceSpan.fromToken(token.payload);
    } else {
      this.sourceSpan = SourceSpan.fromToken(token);
    }
    this.text = token.text ?? '';
  }

  static from = from;
}

function from(token: AntlrToken | TerminalNode | ParserRuleContext): Token {
  return new Token(token);
}
