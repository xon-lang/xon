import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { getExpressionTree } from '../tree/expression/expression-tree-helper';
import { getIdTree } from '../tree/id/id-tree-helper';
import { getLiteralNode } from '../tree/literal/literal-tree-helper';
import { getParameterTree } from '../tree/parameter/parameter-tree-helper';
import { getSourceTree } from '../tree/source/source-tree-helper';
import { getStatementTree } from '../tree/statement/statement-tree-helper';
import { ThrowingErrorListener } from './throwing-error-listener';

export const parse = (code: string, sourceName: string = undefined): XonParser => {
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

export const parseSourceFile = (sourceName: string) => {
  const code = fs.readFileSync(sourceName).toString();
  return getSourceTree(parse(code, sourceName).source());
};

export const parseLiteral = (code: string) => getLiteralNode(parse(code).literal());

export const parseExpression = (code: string) => getExpressionTree(parse(code).expr());

export const parseStatement = (code: string) => getStatementTree(parse(code).statement());

export const parseId = (code: string) => getIdTree(parse(code).id());

export const parseParameter = (code: string) => getParameterTree(parse(code).parameter());

export const parseSource = (code: string) => getSourceTree(parse(code).source());
