import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../../grammar/xon-lexer';
import { XonParser } from '../../grammar/xon-parser';
import { ExpressionNode } from '../expression/expression-node';
import { getExpressionNode } from '../expression/expression-node-helper';
import { getIdNode } from '../id/id-node-helper';
import { LiteralNode } from '../literal/literal-node';
import { getLiteralNode } from '../literal/literal-node-helper';
import { getParameterNode } from '../parameter/parameter-node-helper';
import { SourceNode } from '../source/source-node';
import { getSourceNode } from '../source/source-node-helper';
import { StatementNode } from '../statement/statement-node';
import { getStatementNode } from '../statement/statement-node-helper';
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

export const parseLiteral = <T extends LiteralNode>(code: string): T =>
  getLiteralNode(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionNode>(code: string): T =>
  getExpressionNode(parse(code).expr()) as T;

export const parseStatement = <T extends StatementNode>(code: string): T =>
  getStatementNode(parse(code).statement()) as T;

export const parseId = (code: string) => getIdNode(parse(code).id());

export const parseParameter = (code: string) => getParameterNode(parse(code).parameter());

export const parseSource = (code: string, sourceName: string = undefined) =>
  getSourceNode(parse(code, sourceName).source());

export function parseSourceFile(sourceName: string = undefined): SourceNode {
  const code = fs.readFileSync(sourceName).toString();
  return getSourceNode(parse(code, sourceName).source());
}
