import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from './grammar/xon-lexer';
import { XonParser } from './grammar/xon-parser';
import { DefinitionTree } from './tree/definition/definition.tree';
import { getMemberTree } from './tree/definition/member/member-helper';
import { MemberTree } from './tree/definition/member/member.tree';
import { getExpressionTree } from './tree/expression/expression-helper';
import { ExpressionTree } from './tree/expression/expression.tree';
import { getLiteralTree } from './tree/literal/literal-helper';
import { LiteralTree } from './tree/literal/literal.tree';
import { ProgramTree } from './tree/program/program.tree';
import { getStatementTree } from './tree/statement/statement-helper';
import { StatementTree } from './tree/statement/statement.tree';

export function parse(code: string): XonParser {
  const inputStream = CharStreams.fromString(code);
  const lexer = new XonLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new XonParser(tokenStream);
}

export function parseLiteral<T extends LiteralTree<unknown>>(code: string): T {
  return getLiteralTree(parse(code).literal()) as T;
}

export function parseExpression<T extends ExpressionTree>(code: string): T {
  return getExpressionTree(parse(code).expression()) as T;
}

export function parseStatement<T extends StatementTree>(code: string): T {
  return getStatementTree(parse(code).statement()) as T;
}

export function parseMember<T extends MemberTree>(code: string): T {
  return getMemberTree(parse(code).member()) as T;
}

export function parseDefinition<T extends DefinitionTree>(code: string): T {
  return new DefinitionTree(parse(code).definition()) as T;
}

export function parseProgram<T extends ProgramTree>(code: string): T {
  return new ProgramTree(parse(code).program()) as T;
}
