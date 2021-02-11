import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from './grammar/xon-lexer';
import { XonParser } from './grammar/xon-parser';
import { DefinitionTree } from './tree/definition/definition.tree';
import { getMemberTree } from './tree/definition/member/member-helper';
import { MemberTree } from './tree/definition/member/member.tree';
import { getExpressionTree } from './tree/expression/expression-helper';
import { ExpressionTree } from './tree/expression/expression.tree';
import { LibraryTree } from './tree/library/library.tree';
import { getLiteralTree } from './tree/literal/literal-helper';
import { LiteralTree } from './tree/literal/literal.tree';
import { ProgramTree } from './tree/program/program.tree';
import { getStatementTree } from './tree/statement/statement-helper';
import { StatementTree } from './tree/statement/statement.tree';
import { TypeTree } from './tree/type/type.tree';

export const parse = (code: string): XonParser => {
  const inputStream = CharStreams.fromString(code);
  const lexer = new XonLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new XonParser(tokenStream);
};

export const parseType = (code: string): TypeTree => new TypeTree(parse(code).type());

export const parseLiteral = <T extends LiteralTree>(code: string): T =>
  getLiteralTree(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionTree>(code: string): T =>
  getExpressionTree(parse(code).expression()) as T;

export const parseStatement = <T extends StatementTree>(code: string): T =>
  getStatementTree(parse(code).statement()) as T;

export const parseMember = <T extends MemberTree>(code: string): T =>
  getMemberTree(parse(code).member()) as T;

export const parseDefinition = (code: string): DefinitionTree =>
  new DefinitionTree(parse(code).definition());
export const parseLibrary = (code: string): LibraryTree => new LibraryTree(parse(code).library());

export const parseProgram = <T extends ProgramTree>(code: string): T =>
  new ProgramTree(parse(code).program()) as T;
