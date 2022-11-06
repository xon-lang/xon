import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { XonLexer, XonParser } from '~/grammar';
import { Issue } from '~/issue';
import { String2 } from '~/lib';
import {
  ArgumentTree,
  DeclarationTree,
  ExpressionTree,
  getArgumentTree,
  getDeclarationTree,
  getExpressionTree,
  getLiteralTree,
  getSourceTree,
  getStatementTree,
  LiteralTree,
  SourceTree,
  StatementTree,
} from '~/tree';
import { SourceRange, ThrowingErrorListener } from '~/util';

export function parse(code: String2, sourceName: String2 = undefined): XonParser {
  const inputStream = CharStreams.fromString(code, sourceName);
  const lexer = new XonLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XonParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());
  return parser;
}

function _getSourceTree(parser: XonParser): SourceTree {
  try {
    return getSourceTree(parser.source());
  } catch (error) {
    if (error instanceof Issue) {
      const tree = new SourceTree();
      const stream = error.antlrError.inputStream as CommonTokenStream;
      const tokens = stream.getTokens();
      tree.sourceRange = SourceRange.fromTwoTokens(tokens[0], tokens[tokens.length - 1]);
      tree.issues.push(error);
      return tree;
    }
    throw error;
  }
}

export function parseSourceFile(sourceName: String2): SourceTree {
  const code = readFileSync(sourceName).toString();
  return _getSourceTree(parse(code, sourceName));
}

export function parseSource(code: String2): SourceTree {
  return _getSourceTree(parse(code));
}

export function parseLiteral(code: String2): LiteralTree {
  return getLiteralTree(parse(code).literal());
}

export function parseExpression(code: String2): ExpressionTree {
  return getExpressionTree(parse(code).expression());
}

export function parseStatement(code: String2): StatementTree {
  return getStatementTree(parse(code).statement());
}

export function parseDeclaration(code: String2): DeclarationTree {
  return getDeclarationTree(parse(code).declaration());
}

export function parseArgument(code: String2): ArgumentTree {
  return getArgumentTree(parse(code).argument());
}
