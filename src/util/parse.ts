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

export const parse = (code: String, sourceName: String = undefined): XonParser => {
  const inputStream = CharStreams.fromString(code, sourceName);
  const lexer = new XonLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XonParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());

  return parser;
};

export const parseSourceFile = (sourceName: String) => {
  const code = fs.readFileSync(sourceName).toString();
  return getSourceTree(parse(code, sourceName).source());
};

export const parseLiteral = (code: String) => getLiteralTree(parse(code).literal());

export const parseExpression = (code: String) => getExpressionTree(parse(code).expr());

export const parseStatement = (code: String) => getStatementTree(parse(code).statement());

export const parseParameter = (code: String) => getParameterTree(parse(code).parameter());

export const parseBody = (code: String) => getBodyTree(parse(code).body());

export const parseAttribute = (code: String) => getAttributeTree(parse(code).attribute());

export const parseDefinition = (code: String) => getDefinitionTree(parse(code).definition());

export const parseSource = (code: String) => getSourceTree(parse(code).source());
