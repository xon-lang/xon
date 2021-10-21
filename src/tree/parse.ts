import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { ArgumentTree } from './argument/argument.tree';
import { getAssignmentTree } from './assignment/assignment-tree.helper';
import { AssignmentTree } from './assignment/assignment.tree';
import { getClassTypeTree } from './class-type/class-type-helper';
import { getClassTypeMemberTree } from './class-type/class-type-member/class-type-member-tree.helper';
import { ClassTypeMemberTree } from './class-type/class-type-member/class-type-member.tree';
import { ClassTypeTree } from './class-type/class-type-tree';
import { ExportTree } from './export/export.tree';
import { getExpressionTree } from './expression/expression-tree.helper';
import { ExpressionTree } from './expression/expression.tree';
import { getExtensionTypeTree } from './extension-type/extension-type-helper';
import { getExtensionTypeMemberTree } from './extension-type/extension-type-member/extension-type-member-tree.helper';
import { ExtensionTypeMemberTree } from './extension-type/extension-type-member/extension-type-member.tree';
import { ExtensionTypeTree } from './extension-type/extension-type-tree';
import { ImportTree } from './import/import.tree';
import { getLiteralTree } from './literal/literal-tree.helper';
import { LiteralTree } from './literal/literal.tree';
import { getMethodTree } from './method/method-tree.helper';
import { ParameterTree } from './parameter/parameter.tree';
import { getPropertyTree } from './property/property-tree.helper';
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

export const parseClassTypeMember = <T extends ClassTypeMemberTree>(code: string): T =>
  getClassTypeMemberTree(parse(code).classTypeMember()) as T;

export const parseClassType = (code: string): ClassTypeTree =>
  getClassTypeTree(parse(code).classType());

export const parseExtensionTypeMember = <T extends ExtensionTypeMemberTree>(code: string): T =>
  getExtensionTypeMemberTree(parse(code).classTypeMember()) as T;

export const parseExtensionType = (code: string): ExtensionTypeTree =>
  getExtensionTypeTree(parse(code).extensionType());

export const parseImport = (code: string) => new ImportTree(parse(code).library());

export const parseExport = (code: string) => new ExportTree(parse(code).export());

export const parseTest = (code: string) => new TestTree(parse(code).test());

export const parseMethod = (code: string) => getMethodTree(parse(code).method());

export const parseProperty = (code: string) => getPropertyTree(parse(code).property());

export const parseSource = (code: string, sourceName: string = undefined) =>
  new SourceTree(parse(code, sourceName).source());

export function parseSourceFromFile(sourceName: string = undefined): SourceTree {
  const code = fs.readFileSync(sourceName).toString();
  return new SourceTree(parse(code, sourceName).source());
}
