import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { ParserConfig } from '~/parser/parser-config';
import { ThrowingErrorListener } from '~/parser/throwing-error-listener';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTree } from '~/tree/statement/statement-tree-helper';

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

    lexer.setKeywords(this.config.keywords);
    lexer.setOperators(this.config.operators);

    return lexer;
  }

  private tokenStream(lexer: XonLexer): CommonTokenStream {
    return new CommonTokenStream(lexer);
  }

  private parser(tokenStream: TokenStream): XonParser {
    // console.log(
    //   getLexer(code, location)
    //     .getAllTokens()
    //     .map((x) => {
    //       const type = XonLexer.VOCABULARY.getDisplayName(x.type);

    //       return `${type} = '${x.text}'`;
    //     })
    //     .join(', '),
    // );

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

  public statement(): StatementTree {
    return getStatementTree(this.antlrParser.statement());
  }

  public declaration(): DeclarationTree {
    return getDeclarationTree(this.antlrParser.declaration());
  }

  public argument(): ArgumentTree {
    return getArgumentTree(this.antlrParser.argument());
  }
}

const keywords = ['break', 'continue', 'do', 'else', 'export', 'for', 'if', 'import', 'in', 'return', 'while'];

export function parserFromCode(code: String2, parserConfig: ParserConfig | null = null): Parser {
  const config: ParserConfig = {
    code,
    location: '',
    keywords,
    operators: [],
    ...parserConfig,
  };

  return new Parser(config);
}

export function parserFromFile(location: String2, parserConfig: ParserConfig | null = null): Parser {
  const code = readFileSync(location).toString();
  const config: ParserConfig = {
    code,
    location,
    keywords,
    operators: [],
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
