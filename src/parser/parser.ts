import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { Node } from '~/parser/lexer/node';
import { ParserConfig } from '~/parser/parser-config';
import { ThrowingErrorListener } from '~/parser/throwing-error-listener';
import { getNode } from '~/tree/expression/expression-tree-helper';
import { SourceNode } from '~/tree/expression/source/source-tree';
import { operatorsOrders } from './parser-config';

export class Parser {
  antlrLexer: XonLexer;
  antlrTokenStream: CommonTokenStream;
  antlrParser: XonParser;

  constructor(public config: ParserConfig) {
    this.antlrLexer = this.lexer();
    this.antlrTokenStream = this.tokenStream(this.antlrLexer);
    this.antlrParser = this.parser(this.antlrTokenStream);
  }

  private lexer(): XonLexer {
    const inputStream = CharStreams.fromString(this.config.code, this.config.location);
    const lexer = new XonLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowingErrorListener());

    lexer.operators = this.config.operatorsOrders
      .flatMap((operatorsOrder) => operatorsOrder.operators)
      .flatMap((operators) => operators.split(' '));

    return lexer;
  }

  private tokenStream(lexer: XonLexer): CommonTokenStream {
    return new CommonTokenStream(lexer);
  }

  private parser(tokenStream: TokenStream): XonParser {
    // const tokens = this.lexer()
    //   .getAllTokens()
    //   .filter((x) => x.channel === XonLexer.DEFAULT_TOKEN_CHANNEL)
    //   .map((x) => ({
    //     type: XonLexer.VOCABULARY.getSymbolicName(x.type),
    //     value: x.text,
    //   }));
    // console.log(tokens.map((x) => `${x.type}`).join(' '));
    // console.log(tokens.map((x) => `'${x.value}'`).join(', '));
    // console.log(tokens.map((x) => `${x.type} = '${x.value}'`).join(', '));

    const parser = new XonParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowingErrorListener());

    return parser;
  }

  public source(): SourceNode {
    return getNode(this.antlrParser.source()) as SourceNode;
  }

  public expression(): Node {
    const ctx = this.antlrParser.expression();

    return getNode(ctx);
  }
}

export function parserFromCode(
  code: String2,
  location: String2 = '',
  parserConfig: ParserConfig | null = null,
): Parser {
  const config: ParserConfig = {
    code,
    location,
    operatorsOrders,
    ...parserConfig,
  };

  return new Parser(config);
}

export function parserFromFile(location: String2, parserConfig: ParserConfig | null = null): Parser {
  const code = readFileSync(location).toString();

  return parserFromCode(code, location, parserConfig);
}
