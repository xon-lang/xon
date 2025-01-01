import {ArrayData, Boolean2, Nothing, TextPosition, TextResource} from '#common';
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
  statements: ArrayData<StatementNode>;
  hiddenNodes: ArrayData<Node>;

  parseStatements(breakOnNodeFn?: ((node: Node) => Boolean2) | Nothing): {
    statements: ArrayData<StatementNode>;
    breakNode?: Node | Nothing;
    hiddenNodes: ArrayData<Node>;
  };

  findStatementNode(statements: ArrayData<StatementNode>, position: TextPosition): StatementNode | Nothing;
  findNodeInChildren(children: ArrayData<Node>, position: TextPosition): Node | Nothing;
  findNodeAtPosition(position: TextPosition): Node | Nothing;
  findParentNodeFromPosition(predicate: (node: Node) => Boolean2, position: TextPosition): Node | Nothing;
};
