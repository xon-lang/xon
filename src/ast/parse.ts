import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { XonLexer } from '../grammar/xon-lexer';
import { XonParser } from '../grammar/xon-parser';
import { AttributeTree } from './attribute/attribute-node';
import { getAttributeNode } from './attribute/attribute-node-helper';
import { DefinitionTree } from './definition/definition-tree';
import { getDefinitionTree } from './definition/definition-tree-helper';
import { ExportNode } from './export/export-node';
import { ExpressionNode } from './expression/expression-node';
import { getExpressionNode } from './expression/expression-node-helper';
import { ImportNode } from './import/import-node';
import { getLiteralTree } from './literal/literal-node-helper';
import { LiteralNode } from './literal/literal-node';
import { ParameterNode } from './parameter/parameter-node';
import { SourceTree } from './source/source-tree';
import { StatementNode } from './statement/statement-node';
import { getStatementTree } from './statement/statement-node-helper';
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

export const parseParameter = (code: string): ParameterNode =>
  new ParameterNode(parse(code).parameter());

export const parseAttribute = <T extends AttributeTree>(code: string): T =>
  getAttributeNode(parse(code).attribute()) as T;

export const parseLiteral = <T extends LiteralNode>(code: string): T =>
  getLiteralTree(parse(code).literal()) as T;

export const parseExpression = <T extends ExpressionNode>(code: string): T =>
  getExpressionNode(parse(code).expr()) as T;

export const parseStatement = <T extends StatementNode>(code: string): T =>
  getStatementTree(parse(code).statement()) as T;

export const parseDefinition = <T extends DefinitionTree>(code: string): T =>
  getDefinitionTree(parse(code).definition()) as T;

export const parseImport = (code: string) => new ImportNode(parse(code).library());

export const parseExport = (code: string) => new ExportNode(parse(code).export());

export const parseSource = (code: string, sourceName: string = undefined) =>
  new SourceTree(parse(code, sourceName).source());

export function parseSourceFile(sourceName: string = undefined): SourceTree {
  const code = fs.readFileSync(sourceName).toString();
  return new SourceTree(parse(code, sourceName).source());
}
