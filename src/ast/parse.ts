import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { ExpressionNode } from './expression/expression-node';
import { getExpressionNode } from './expression/expression-node-helper';
import { LiteralNode } from './literal/literal-node';
import { getLiteralTree } from './literal/literal-node-helper';
import { ParameterNode } from './parameter/parameter-node';
import { SourceNode } from './source/source-node';
import { StatementNode } from './statement/statement-node';
import { getStatementNode } from './statement/statement-node-helper';
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

export const parseParameter = (code: string): ParameterNode =>
  new ParameterNode(parse(code).parameter());

export const parseLiteral = <T extends LiteralNode>(code: string): T =>
  getLiteralTree(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionNode>(code: string): T =>
  getExpressionNode(parse(code).expr()) as T;

export const parseStatement = <T extends StatementNode>(code: string): T =>
  getStatementNode(parse(code).statement()) as T;

export const parseSource = (code: string, sourceName: string = undefined) =>
  new SourceNode(parse(code, sourceName).source());

export function parseSourceFile(sourceName: string = undefined): SourceNode {
  const code = fs.readFileSync(sourceName).toString();
  return new SourceNode(parse(code, sourceName).source());
}
