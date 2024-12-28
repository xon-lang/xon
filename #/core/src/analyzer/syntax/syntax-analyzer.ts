import {Boolean2, Nothing, TextPosition, TextResource} from '#common';
import {
  AnalyzerDiagnosticManager,
  FormatterManager,
  LexicalAnalyzer,
  Node,
  StatementNode,
  SyntaxAnalyzerConfig,
} from '#core';

export type SyntaxAnalyzer = {
  lexicalAnalyzer: LexicalAnalyzer;
  resource: TextResource;
  diagnosticManager: AnalyzerDiagnosticManager;
  formatterManager: FormatterManager;
  config: SyntaxAnalyzerConfig;
  statements: StatementNode[];
  hiddenNodes: Node[];

  parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
    statements: StatementNode[];
    breakNode?: Node | Nothing;
    hiddenNodes: Node[];
  };

  findStatementNode(statements: StatementNode[], position: TextPosition): StatementNode | Nothing;
  findNodeInChildren(children: Node[], position: TextPosition): Node | Nothing;
  findNodeAtPosition(position: TextPosition): Node | Nothing;
  findParentNodeFromPosition(predicate: (node: Node) => Boolean2, position: TextPosition): Node | Nothing;
};
