/* eslint-disable max-classes-per-file */
import { ANTLRErrorListener, CharStreams, CommonTokenStream, Recognizer } from 'antlr4ts';
import { XonLexer } from './grammar/xon-lexer';
import { XonParser } from './grammar/xon-parser';
import { Issue } from './issue-service/issue';
import { IssueLevel } from './issue-service/issue-level';
import { IssueService } from './issue-service/issue-service';
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
import { getTypeTree } from './tree/type/type-helper';
import { TypeTree } from './tree/type/type.tree';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  // eslint-disable-next-line class-methods-use-this
  public syntaxError<T extends TSymbol>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _recognizer: Recognizer<T, any>,
    _offendingSymbol: T | undefined,
    line: number,
    column: number,
    message: string,
  ): void {
    const issue = new Issue();
    issue.level = IssueLevel.Error;
    issue.message = message;
    issue.line = line;
    issue.column = column;
    issue.path = IssueService.instance.lastPath;
    IssueService.instance.lastScope.push(issue);
    throw issue.toError();
  }
}

export const parse = (code: string): XonParser => {
  const inputStream = CharStreams.fromString(code);
  const lexer = new XonLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XonParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());

  return parser;
};

export const parseType = <T extends TypeTree>(code: string): T =>
  getTypeTree(parse(code).type()) as T;

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

export function parseProgram<T extends ProgramTree>(code: string): T {
  return new ProgramTree(parse(code).program()) as T;
}
