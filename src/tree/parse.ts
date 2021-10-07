import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { ArgumentTree } from './argument/argument.tree';
import { getAssignmentTree } from './assignment/assignment-tree.helper';
import { AssignmentTree } from './assignment/assignment.tree';
import { DefinitionTree } from './definition/definition.tree';
import { getMemberTree } from './definition/member/member-tree.helper';
import { MemberTree } from './definition/member/member.tree';
import { ExportTree } from './export/export.tree';
import { getExpressionTree } from './expression/expression-tree.helper';
import { ExpressionTree } from './expression/expression.tree';
import { ExtensionMemberTree } from './extension-member/extension-member.tree';
import { FunctionTree } from './function/function.tree';
import { ImportTree } from './import/import.tree';
import { ListingTree } from './listing/listing.tree';
import { getLiteralTree } from './literal/literal-tree.helper';
import { LiteralTree } from './literal/literal.tree';
import { ParameterTree } from './parameter/parameter.tree';
import { getStatementTree } from './statement/statement-tree.helper';
import { StatementTree } from './statement/statement.tree';
import { TestTree } from './test/test.tree';
import { ThrowingErrorListener } from './throwing-error-listener';
import { getTypeTree } from './type/type-tree.helper';
import { TypeTree } from './type/type.tree';

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

export const parseType = <T extends TypeTree>(code: string): T =>
  getTypeTree(parse(code).type()) as T;

export const parseParameter = (code: string): ParameterTree =>
  new ParameterTree(parse(code).parameter());

export const parseArgument = (code: string): ArgumentTree =>
  new ArgumentTree(parse(code).argument());

export const parseLiteral = <T extends LiteralTree>(code: string): T =>
  getLiteralTree(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionTree>(code: string): T =>
  getExpressionTree(parse(code).expression()) as T;

export const parseStatement = <T extends StatementTree>(code: string): T =>
  getStatementTree(parse(code).statement()) as T;

export const parseAssignment = <T extends AssignmentTree>(code: string): T =>
  getAssignmentTree(parse(code).assignment()) as T;

export const parseMember = <T extends MemberTree>(code: string): T =>
  getMemberTree(parse(code).member()) as T;

export const parseDefinition = (code: string): DefinitionTree =>
  new DefinitionTree(parse(code).definition());

export const parseImport = (code: string): ImportTree => new ImportTree(parse(code).library());

export const parseExport = (code: string): ExportTree => new ExportTree(parse(code).export());

export const parseTest = (code: string): TestTree => new TestTree(parse(code).test());

export const parseFunction = (code: string): FunctionTree =>
  new FunctionTree(parse(code).function());

export const parseExtensionMember = (code: string): ExtensionMemberTree =>
  new ExtensionMemberTree(parse(code).extensionMember());

export function parseListing(code: string, sourceName: string = undefined): ListingTree {
  return new ListingTree(parse(code, sourceName).listing());
}

export function parseListingFromFile(sourceName: string = undefined): ListingTree {
  const code = fs.readFileSync(sourceName).toString();
  return new ListingTree(parse(code, sourceName).listing());
}
