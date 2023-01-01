import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
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
import { ThrowingErrorListener } from '~/util/throwing-error-listener';

export function getLexer(code: String2, location: String2 | null): XonLexer {
  const inputStream = CharStreams.fromString(code, location ?? '');
  const lexer = new XonLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());

  return lexer;
}

export function getParser(code: String2, location: String2 | null = null): XonParser {
  const lexer = getLexer(code, location);
  const tokenStream = new CommonTokenStream(lexer);
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

function _getSourceTree(parser: XonParser): SourceTree | never {
  try {
    return getSourceTree(parser.source());
  } catch (error) {
    if (error instanceof Issue) {
      const tree = new SourceTree(null);
      const stream = error.antlrError?.inputStream as CommonTokenStream;
      const tokens = stream.getTokens();
      tree.sourceSpan = SourceSpan.fromTwoTokens(tokens[0], tokens[tokens.length - 1]);
      tree.issues.push(error);

      return tree;
    }
    throw error;
  }
}

export function parseSourceFile(location: String2): SourceTree {
  const code = readFileSync(location).toString();

  return _getSourceTree(getParser(code, location));
}

export function parseSource(code: String2): SourceTree {
  return _getSourceTree(getParser(code));
}

export function parseExpression(code: String2): ExpressionTree {
  return getExpressionTree(getParser(code).expression());
}

export function parseStatement(code: String2): StatementTree {
  return getStatementTree(getParser(code).statement());
}

export function parseDeclaration(code: String2): DeclarationTree {
  return getDeclarationTree(getParser(code).declaration());
}

export function parseArgument(code: String2): ArgumentTree {
  return getArgumentTree(getParser(code).argument());
}
