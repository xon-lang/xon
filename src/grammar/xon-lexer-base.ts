// extract from https://github.com/antlr/grammars-v4/blob/
// 6b520363786994d06993f9d1a6fc126893a11b04/python/python3-ts/Python3.g4

import { Lexer, Vocabulary } from 'antlr4ts';
import { CommonToken } from 'antlr4ts/CommonToken';
import { Token } from 'antlr4ts/Token';
import { XonParser } from './xon-parser';

const tabWidth = 4;

const getIndentationCount = (whitespace: string): number =>
  Array.from(whitespace).reduce(
    (sum, x) => sum + (x === '\t' ? tabWidth - (sum % tabWidth) : 1),
    0
  );

export abstract class XonLexerBase extends Lexer {
  private token_queue: Token[] = [];

  private indents: number[] = [];

  private opened = 0;

  private last_token: Token | undefined = undefined;

  public abstract get channelNames(): string[];

  public abstract get modeNames(): string[];

  public abstract get ruleNames(): string[];

  public abstract get vocabulary(): Vocabulary;

  public abstract get grammarFileName(): string;

  public reset(): void {
    // A queue where extra tokens are pushed on (see the LineBreak lexer rule).
    this.token_queue = [];
    // The stack that keeps track of the indentation level.
    this.indents = [];
    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;
    super.reset();
  }

  public emit(token?: Token): Token {
    const newToken = token ? super.emit(token) : super.emit();
    this.token_queue.push(newToken);
    return newToken;
  }

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  public nextToken(): Token {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this.inputStream.LA(1) === XonParser.EOF && this.indents.length) {
      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter((val) => val.type !== XonParser.EOF);

      // First emit an extra line break that serves as the end of the statement.
      this.emit(this.commonToken(XonParser.LineBreak, '\n'));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emit(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emit(this.commonToken(XonParser.EOF, '<EOF>'));
    }

    const next = super.nextToken();

    if (next.channel === Token.DEFAULT_CHANNEL) {
      // Keep track of the last token on the default channel.
      this.last_token = next;
    }

    return this.token_queue.shift() || next;
  }

  // Calculates the indentation of the provided spaces, taking the
  // following rules into account:
  //
  // "Tabs are replaced (from left to right) by one to eight spaces
  //  such that the total number of characters up to and including
  //  the replacement is a multiple of eight [...]"
  //
  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation

  protected atStartOfInput(): boolean {
    return this.charIndex === 0;
  }

  protected handleLineBreak(): void {
    const newLine = this.text.replace(/[^\r\n]+/g, '');
    const spaces = this.text.replace(/[\r\n]+/g, '');
    // Strip newlines inside open clauses except if we are near EOF. We keep LineBreaks near EOF to
    // satisfy the final newline needed by the single_put rule used by the REPL.
    const next = this.inputStream.LA(1);
    // eslint-disable-next-line no-magic-numbers
    const nextnext = this.inputStream.LA(2);

    const eofCode = -1;
    const returnCode = 13;
    const newLineCode = 10;
    const hashCode = 35;
    if (
      this.opened > 0 ||
      // EOF
      (nextnext !== eofCode &&
        // '\r'
        (next === returnCode ||
          // '\n'
          next === newLineCode ||
          // '#'
          next === hashCode))
    ) {
      // If we're inside a list or on a blank line, ignore all indents,
      // dedents and line breaks.
      this.skip();
    } else {
      this.emit(this.commonToken(XonParser.LineBreak, newLine));
      const indent = getIndentationCount(spaces);
      const previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;
      if (indent === previous) {
        // skip indents of the same size as the present indent-size
        this.skip();
      } else if (indent > previous) {
        this.indents.push(indent);
        this.emit(this.commonToken(XonParser.INDENT, spaces));
      } else {
        // Possibly emit more than 1 DEDENT token.
        while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
          this.emit(this.createDedent());
          this.indents.pop();
        }
      }
    }
  }

  private createDedent(): Token {
    const dedent = this.commonToken(XonParser.DEDENT, '');
    if (this.last_token) {
      dedent.line = this.last_token.line;
    }
    return dedent;
  }

  private commonToken(type: number, text: string): CommonToken {
    const stop: number = this.charIndex - 1;
    const start: number = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(
      type,
      text,
      this._tokenFactorySourcePair,
      Lexer.DEFAULT_TOKEN_CHANNEL,
      start,
      stop
    );
  }
}
