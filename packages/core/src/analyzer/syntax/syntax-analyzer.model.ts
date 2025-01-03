import {ArrayData, Boolean2, Nothing, TextPosition, TextResource} from '#common';
import {FormatterManager, LexicalAnalyzer, Node, StatementNode} from '#core';
import {AnalyzerDiagnosticManager} from '#diagnostic';

export type SyntaxAnalyzer = {
  lexicalAnalyzer: LexicalAnalyzer;
  resource: TextResource;
  diagnosticManager: AnalyzerDiagnosticManager;
  formatterManager: FormatterManager;
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
