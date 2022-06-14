// https://github.com/antlr/grammars-v4/blob/6b520363786994d06993f9d1a6fc126893a11b04/python/python3-ts/Python3.g4

import { Lexer, Vocabulary } from 'antlr4ts';
import { CommonToken } from 'antlr4ts/CommonToken';
import { Token } from 'antlr4ts/Token';
import { XonParser } from './xon-parser';

const tabWidth = 2;

const getIndentationCount = (whitespace: string): number =>
  Array.from(whitespace).reduce(
    (sum, x) => sum + (x === '\t' ? tabWidth - (sum % tabWidth) : 1),
    0,
  );

export abstract class XonLexerBase extends Lexer {
  protected opened: number = 0;
  private tokenQueue: Token[] = [];
  private indents: number[] = [];
  private lastToken?: Token;
  public abstract get channelNames(): string[];
  public abstract get modeNames(): string[];
  public abstract get ruleNames(): string[];
  public abstract get vocabulary(): Vocabulary;
  public abstract get grammarFileName(): string;

  public reset(): void {
    this.tokenQueue = [];
    this.indents = [];
    this.opened = 0;
    super.reset();
  }

  public emit(token?: Token): Token {
    const newToken = token ? super.emit(token) : super.emit();
    this.tokenQueue.push(newToken);
    return newToken;
  }

  public nextToken(): Token {
    if (this.inputStream.LA(1) === XonParser.EOF && this.indents.length) {
      this.tokenQueue = this.tokenQueue.filter((val) => val.type !== XonParser.EOF);

      this.emit(this.commonToken(XonParser.NL, '\n'));

      while (this.indents.length) {
        this.emit(this.createDedent());
        this.indents.pop();
      }

      this.emit(this.commonToken(XonParser.EOF, '<EOF>'));
    }

    const next = super.nextToken();
    if (next.channel === Token.DEFAULT_CHANNEL) {
      this.lastToken = next;
    }

    return this.tokenQueue.shift() || next;
  }

  protected atStartOfInput(): boolean {
    return this.charIndex === 0;
  }

  protected handleLineBreak(): void {
    const newLine = this.text.replace(/[^\r\n]+/g, '');
    const spaces = (this.text.match(/ +$/g) || [])[0] || '';
    const next = this.inputStream.LA(1);
    const nextNext = this.inputStream.LA(2);

    const EOF_CODE = -1;
    const LINE_FEED_CODE = 10;
    const CARRIAGE_RETURN_CODE = 13;
    if (
      this.opened > 0 ||
      !newLine
      // ||
      // (nextNext !== EOF_CODE && (next === CARRIAGE_RETURN_CODE || next === LINE_FEED_CODE))
    ) {
      this.skip();
      return;
    }
    this.emit(this.commonToken(XonParser.NL, newLine));
    const indent = getIndentationCount(spaces);
    const previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;
    if (indent === previous) {
      this.skip();
    } else if (indent > previous) {
      this.indents.push(indent);
      this.emit(this.commonToken(XonParser.INDENT, spaces));
    } else {
      while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
        this.emit(this.createDedent());
        this.indents.pop();
      }
    }
  }

  private createDedent(): Token {
    const dedent = this.commonToken(XonParser.DEDENT, '');
    if (this.lastToken) {
      dedent.line = this.lastToken.line;
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
      stop,
    );
  }
}
