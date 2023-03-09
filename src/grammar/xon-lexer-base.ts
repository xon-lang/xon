import { CommonToken, Lexer, Token, Vocabulary } from 'antlr4ts';
import { XonParser } from '~/grammar/xon-parser';
import { Boolean2, Integer, String2 } from '~/lib/core';

const TAB_WIDTH = 2;

const getIndentationCount = (whitespace: String2): Integer =>
  Array.from(whitespace).reduce((sum, x) => sum + ((x === '\t' && TAB_WIDTH - (sum % TAB_WIDTH)) || 1), 0);

export abstract class XonLexerBase extends Lexer {
  protected opened: Integer = 0;
  private tokenQueue: Token[] = [];
  private indents: Integer[] = [];
  private lastToken: Token | null = null;
  public operators: String2[] = [];
  public abstract get channelNames(): String2[];
  public abstract get modeNames(): String2[];
  public abstract get ruleNames(): String2[];
  public abstract get vocabulary(): Vocabulary;
  public abstract get grammarFileName(): String2;

  public reset(): void {
    this.tokenQueue = [];
    this.indents = [];
    this.opened = 0;
    super.reset();
  }

  public emit(token?: Token): Token {
    const newToken = (token && super.emit(token)) || super.emit();
    this.tokenQueue.push(newToken);

    return newToken;
  }

  public nextToken(): Token {
    if (this.inputStream.LA(1) === XonParser.EOF && this.indents.length) {
      this.tokenQueue = this.tokenQueue.filter((val) => val.type !== XonParser.EOF);

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

    return this.tokenQueue.shift() ?? next;
  }

  public isOperator(): boolean {
    if (!this.operators.includes(this.text)) return false;

    const nextCharCode = this.inputStream.LA(1);
    const next = String.fromCharCode(nextCharCode);

    return !this.operators.some((operator) => operator.startsWith(this.text + next));
  }

  protected atStartOfInput(): Boolean2 {
    return this.charIndex === 0;
  }

  protected handleLineBreak(): void {
    const newLine = this.text.replace(/[^\r\n]+/gu, '');
    const [spaces] = this.text.match(/ +$/gu) ?? [''];

    if (this.opened > 0 || !newLine) {
      this.skip();

      return;
    }
    this.emit(this.commonToken(XonParser.NL, newLine));
    const indent = getIndentationCount(spaces);
    const previous = (this.indents.length && this.indents[this.indents.length - 1]) || 0;
    if (indent === previous) {
      this.skip();
    } else if (indent > previous) {
      this.indents.push(indent);
      this.emit(this.commonToken(XonParser.INDENT, spaces));
    } else {
      while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
        this.emit(this.createDedent());
        this.emit(this.commonToken(XonParser.NL, newLine));
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

  private commonToken(type: Integer, text: String2): CommonToken {
    const start = (this.lastToken?.stopIndex ?? this.charIndex - 1) + 1;
    const stop = start + Math.max(0, text.length - 1);
    const token = new CommonToken(type, text, this._tokenFactorySourcePair, Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
    this.lastToken = token;

    return token;
  }
}
