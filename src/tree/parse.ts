import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { ArgumentTree } from './argument/argument.tree';
import { getAssignmentTree } from './assignment/assignment-tree.helper';
import { AssignmentTree } from './assignment/assignment.tree';
import { getClassMemberTree } from './definition/class-definition/class-member/class-member-tree.helper';
import { ClassMemberTree } from './definition/class-definition/class-member/class-member.tree';
import { DefinitionTree } from './definition/definition-tree';
import { getDefinitionTree } from './definition/definition-tree-helper';
import { ExportTree } from './export/export.tree';
import { getExpressionTree } from './expression/expression-tree.helper';
import { ExpressionTree } from './expression/expression.tree';
import { ImportTree } from './import/import.tree';
import { getLiteralTree } from './literal/literal-tree.helper';
import { LiteralTree } from './literal/literal.tree';
import { ParameterTree } from './parameter/parameter.tree';
import { SourceTree } from './source/source-tree';
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

export const parseClassMember = <T extends ClassMemberTree>(code: string): T =>
  getClassMemberTree(parse(code).classMember()) as T;

export const parseDefinition = <T extends DefinitionTree>(code: string): T =>
  getDefinitionTree(parse(code).definition()) as T;

export const parseImport = (code: string) => new ImportTree(parse(code).library());

export const parseExport = (code: string) => new ExportTree(parse(code).export());

export const parseTest = (code: string) => new TestTree(parse(code).test());

export const parseSource = (code: string, sourceName: string = undefined) =>
  new SourceTree(parse(code, sourceName).source());

export function parseSourceFile(sourceName: string = undefined): SourceTree {
  const code = fs.readFileSync(sourceName).toString();
  return new SourceTree(parse(code, sourceName).source());
}
