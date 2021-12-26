import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../../grammar/xon-lexer';
import { XonParser } from '../../grammar/xon-parser';
import { getDeclarationTree } from '../declaration/declaration-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { getIdTree } from '../id/id-tree-helper';
import { LiteralTree } from '../literal/literal-tree';
import { getLiteralNode } from '../literal/literal-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
import { StatementTree } from '../statement/statement-tree';
import { getStatementTree } from '../statement/statement-tree-helper';
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

export const parseLiteral = <T extends LiteralTree>(code: string): T =>
  getLiteralNode(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionTree>(code: string): T =>
  getExpressionTree(parse(code).expr()) as T;

export const parseStatement = <T extends StatementTree>(code: string): T =>
  getStatementTree(parse(code).statement()) as T;

export const parseId = (code: string) => getIdTree(parse(code).id());

export const parseDeclaration = (code: string) => getDeclarationTree(parse(code).declaration());

export const parseSource = (code: string, sourceName: string = undefined) =>
  getSourceTree(parse(code, sourceName).source());

export function parseSourceFile(sourceName: string = undefined): SourceTree {
  const code = fs.readFileSync(sourceName).toString();
  return getSourceTree(parse(code, sourceName).source());
}
