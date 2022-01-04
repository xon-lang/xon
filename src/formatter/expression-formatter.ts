import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { XonLexer } from '../grammar/xon-lexer';
import { ExprContext, XonParser } from '../grammar/xon-parser';

export class ExpressionFormatter {
  constructor(ctx: ExprContext) {}
}

function formatExpression() {

}

function parse(code: string) {
  const inputStream = CharStreams.fromString(code)
  const lexer = new XonLexer(inputStream);

  var commentsTokenStream = new CommonTokenStream(lexer, XonLexer.COMMENT_CHANNEL);
  const tokens: Token[] = [];
  while (commentsTokenStream.LA(1) != XonLexer.EOF) {
    tokens.push(commentsTokenStream.LT(1));
    commentsTokenStream.consume();
  }

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XonParser(tokenStream);

  return { tokens, parser };
}
