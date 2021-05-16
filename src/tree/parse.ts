import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { ArgumentTree } from './argument/argument.tree';
import { DefinitionTree } from './definition/definition.tree';
import { getMemberTree } from './definition/member/member-tree.helper';
import { MemberTree } from './definition/member/member.tree';
import { getExpressionTree } from './expression/expression-tree.helper';
import { ExpressionTree } from './expression/expression.tree';
import { getExtensionMethodTree } from './extension-method/extension-method-tree.helper';
import { ExtensionMethodTree } from './extension-method/extension-method.tree';
import { getFunctionTree } from './function/function-tree.helper';
import { FunctionTree } from './function/function.tree';
import { LibraryTree } from './library/library.tree';
import { getLiteralTree } from './literal/literal-tree.helper';
import { LiteralTree } from './literal/literal.tree';
import { ModuleTree } from './module/module.tree';
import { ParameterTree } from './parameter/parameter.tree';
import { getStatementTree } from './statement/statement-tree.helper';
import { StatementTree } from './statement/statement.tree';
import { getTestTree } from './test/test-tree.helper';
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

export const parseTest = (code: string): TestTree => getTestTree(parse(code).test());

export const parseFunction = (code: string): FunctionTree =>
  getFunctionTree(parse(code).function());

export const parseExtensionMethod = (code: string): ExtensionMethodTree =>
  getExtensionMethodTree(parse(code).extensionMethod());

export const parseMember = <T extends MemberTree>(code: string): T =>
  getMemberTree(parse(code).member()) as T;

export const parseDefinition = (code: string): DefinitionTree =>
  new DefinitionTree(parse(code).definition());

export const parseLibrary = (code: string): LibraryTree => new LibraryTree(parse(code).library());

export function parseModule(code: string, sourceName: string = undefined): ModuleTree {
  return new ModuleTree(parse(code, sourceName).module());
}

export function parseModuleFromFile(sourceName: string = undefined): ModuleTree {
  const code = fs.readFileSync(sourceName).toString();
  return new ModuleTree(parse(code, sourceName).module());
}
