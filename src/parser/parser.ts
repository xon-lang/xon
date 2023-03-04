import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { keywords, leftOperators, ParserConfig, rightOperators } from '~/parser/parser-config';
import { ThrowingErrorListener } from '~/parser/throwing-error-listener';
import { BodyTree } from '~/tree/body/body-tree';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';

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

    lexer.keywords = this.config.keywords;
    lexer.operators = [...this.config.leftOperators, ...this.config.rightOperators];

    return lexer;
  }

  private tokenStream(lexer: XonLexer): CommonTokenStream {
    return new CommonTokenStream(lexer);
  }

  private parser(tokenStream: TokenStream): XonParser {
    // const tokens = this.lexer()
    //   .getAllTokens()
    //   .map((x) => ({
    //     type: XonLexer.VOCABULARY.getDisplayName(x.type),
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

  public source(): SourceTree {
    return getSourceTree(this.antlrParser.source());
  }

  public expression(): ExpressionTree {
    return getExpressionTree(this.antlrParser.expression());
  }

  public body(): BodyTree {
    return getBodyTree(this.antlrParser.body());
  }
}

const flatLeftOperators = leftOperators.flatMap((x) => x.split(' '));
const flatRightOperators = rightOperators.flatMap((x) => x.split(' '));
const flatKeywords = keywords.flatMap((x) => x.split(' '));

export function parserFromCode(code: String2, parserConfig: ParserConfig | null = null): Parser {
  const config: ParserConfig = {
    code,
    location: '',
    keywords: flatKeywords,
    leftOperators: flatLeftOperators,
    rightOperators: flatRightOperators,
    ...parserConfig,
  };

  return new Parser(config);
}

export function parserFromFile(location: String2, parserConfig: ParserConfig | null = null): Parser {
  const code = readFileSync(location).toString();
  const config: ParserConfig = {
    code,
    location,
    keywords: flatKeywords,
    leftOperators: flatLeftOperators,
    rightOperators: flatRightOperators,
    ...parserConfig,
  };

  return new Parser(config);
}

// function _getSourceTree(parser: XonParser): SourceTree | never {
//   try {
//     return getSourceTree(parser.source());
//   } catch (error) {
//     if (error instanceof Issue) {
//       const tree = new SourceTree(null);
//       const stream = error.antlrError?.inputStream as CommonTokenStream;
//       const tokens = stream.getTokens();
//       tree.sourceSpan = SourceSpan.fromTwoTokens(tokens[0], tokens[tokens.length - 1]);
//       tree.issues.push(error);

//       return tree;
//     }
//     throw error;
//   }
// }
