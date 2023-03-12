import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { OperatorsOrder } from '~/compiler/parser/parser-config';
import { Source } from '~/compiler/source/source';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { Node } from '~/node/node';
import { getNode } from '~/node/node-helper';
import { SourceNode } from '~/node/source/source-node';
import { operatorsOrders } from './parser-config';

export class Parser {
  antlrLexer: XonLexer;
  antlrTokenStream: CommonTokenStream;
  antlrParser: XonParser;

  constructor(public source: Source, public operatorsOrders: OperatorsOrder[]) {
    this.antlrLexer = this.lexer();
    this.antlrTokenStream = new CommonTokenStream(this.antlrLexer);
    this.antlrParser = this.parser(this.antlrTokenStream);
  }

  private lexer(): XonLexer {
    const inputStream = CharStreams.fromString(this.source.text, this.source.location ?? '');
    return new XonLexer(inputStream);
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

    return new XonParser(tokenStream);
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
