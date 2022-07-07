// this code was generated

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { Issue } from '../issue-service/issue';
import { String } from '../lib/core';
import { getArgumentTree } from '../tree/argument/argument-tree-helper';
import { getDefinitionTree } from '../tree/definition/definition-tree-helper';
import { getExpressionTree } from '../tree/expression/expression-tree-helper';
import { getLiteralTree } from '../tree/literal/literal-tree-helper';
import { getParameterTree } from '../tree/parameter/parameter-tree-helper';
import { SourceTree } from '../tree/source/source-tree';
import { getSourceTree } from '../tree/source/source-tree-helper';
import { getStatementTree } from '../tree/statement/statement-tree-helper';
import { SourceRange } from './source-range';
import { ThrowingErrorListener } from './throwing-error-listener';

export function parse(code: String, sourceName: String = undefined): XonParser {
  let inputStream, lexer, tokenStream, parser;
  inputStream = CharStreams.fromString(code, sourceName);
  lexer = new XonLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());
  tokenStream = new CommonTokenStream(lexer);
  parser = new XonParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());
  return parser;
}

function _getSourceTree(parser: XonParser) {
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
    } else {
      throw error;
    }
  }
}

export function parseSourceFile(sourceName: String) {
  let code;
  code = fs.readFileSync(sourceName).toString();
  return _getSourceTree(parse(code, sourceName));
}

export function parseSource(code: String) {
  return _getSourceTree(parse(code));
}

export function parseLiteral(code: String) {
  return getLiteralTree(parse(code).literal());
}

export function parseExpression(code: String) {
  return getExpressionTree(parse(code).expression());
}

export function parseStatement(code: String) {
  return getStatementTree(parse(code).statement());
}

export function parseParameter(code: String) {
  return getParameterTree(parse(code).parameter());
}

export function parseDefinition(code: String) {
  return getDefinitionTree(parse(code).definition());
}

export function parseArgument(code: String) {
  return getArgumentTree(parse(code).argument());
}

// this code was generated
