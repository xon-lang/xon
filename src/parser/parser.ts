import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { Node } from '~/node/node';
import { getNode } from '~/node/node-helper';
import { SourceNode } from '~/node/source/source-node';
import { OperatorsOrder } from '~/parser/parser-config';
import { Source } from '~/parser/source/source';
import { ThrowingErrorListener } from '~/parser/throwing-error-listener';
import { operatorsOrders } from './parser-config';

export class Parser {
  antlrLexer: XonLexer;
  antlrTokenStream: CommonTokenStream;
  antlrParser: XonParser;

  constructor(public source: Source, public operatorsOrders: OperatorsOrder[]) {
    this.antlrLexer = this.lexer();
    this.antlrTokenStream = this.tokenStream(this.antlrLexer);
    this.antlrParser = this.parser(this.antlrTokenStream);
  }

  private lexer(): XonLexer {
    const inputStream = CharStreams.fromString(this.source.text, this.source.location ?? '');
    const lexer = new XonLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowingErrorListener());
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

  public sourceNode(): SourceNode {
    return getNode(this.source, this.antlrParser.source()) as SourceNode;
  }

  public expression(): Node {
    const ctx = this.antlrParser.expression();

    return getNode(this.source, ctx);
  }
}

export function parseSource(source: Source): SourceNode {
  const parser = new Parser(source, operatorsOrders);
  return parser.sourceNode();
}

export function parseExpression(source: Source): Node {
  const parser = new Parser(source, operatorsOrders);
  return parser.expression();
}
