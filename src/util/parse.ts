// this code was generated

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { String } from '../lib/core';
import { getAttributeTree } from '../tree/attribute/attribute-tree-helper';
import { getBodyTree } from '../tree/body/body-tree-helper';
import { getDefinitionTree } from '../tree/definition/definition-tree-helper';
import { getExpressionTree } from '../tree/expression/expression-tree-helper';
import { getLiteralTree } from '../tree/literal/literal-tree-helper';
import { getParameterTree } from '../tree/parameter/parameter-tree-helper';
import { getSourceTree } from '../tree/source/source-tree-helper';
import { getStatementTree } from '../tree/statement/statement-tree-helper';
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

export function parseSourceFile(sourceName: String) {
  let code;
  code = fs.readFileSync(sourceName).toString();
  return getSourceTree(parse(code, sourceName).source());
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

export function parseBody(code: String) {
  return getBodyTree(parse(code).body());
}

export function parseAttribute(code: String) {
  return getAttributeTree(parse(code).attribute());
}

export function parseDefinition(code: String) {
  return getDefinitionTree(parse(code).definition());
}

export function parseSource(code: String) {
  return getSourceTree(parse(code).source());
}

// this code was generated
