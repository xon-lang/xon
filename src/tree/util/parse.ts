import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../../grammar/xon-lexer';
import { XonParser } from '../../grammar/xon-parser';
import { getDeclarationTree } from '../declaration/declaration-tree-helper';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { getIdTree } from '../id/id-tree-helper';
import { getLiteralNode } from '../literal/literal-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
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

export function parseSourceFile(sourceName: string = undefined): SourceTree {
  const code = fs.readFileSync(sourceName).toString();
  return getSourceTree(parse(code, sourceName).source());
}

export const parseLiteral = (code: string) => getLiteralNode(parse(code).literal());

export const parseExpression = (code: string) => getExpressionTree(parse(code).expr());

export const parseStatement = (code: string) => getStatementTree(parse(code).statement());

export const parseId = (code: string) => getIdTree(parse(code).id());

export const parseDeclaration = (code: string) => getDeclarationTree(parse(code).declaration());

export const parseSource = (code: string) => getSourceTree(parse(code).source());
