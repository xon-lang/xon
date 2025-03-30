import {
  HighlightToken,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  newHighlightContext,
  newSemanticContext,
  Node,
  parseStatements,
  StatementNode,
} from '#analyzer';
import {ArrayData, newText, newUri, nothing, Nothing, TextPosition, Uri} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';
import {$VscodeType} from '#vscode';
import {OutputChannel, TextDocument} from 'vscode';

export type TextDocumentAnalyzer = Model &
  Brand<'Analyzer.TextDocumentAnalyzer'> & {
    documentUri: Uri;
    statements: ArrayData<StatementNode>;

    findClosestNode<T extends Node = Node>(
      predicate: (node: Node) => node is T,
      position: TextPosition,
    ): T | Nothing;
    findNode(position: TextPosition): Node | Nothing;
    getHighlights(): ArrayData<HighlightToken>;
    getDiagnostics(): ArrayData<AnalyzerDiagnostic>;
  };

export const $TextDocumentAnalyzer = () => $VscodeType<TextDocumentAnalyzer>('TextDocumentAnalyzer');

export function newTextDocumentAnalyzer(
  document: TextDocument,
  channel: OutputChannel,
): TextDocumentAnalyzer {
  const text = newText(document.getText());
  const location = newText(document.uri.fsPath);
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  const semanticContext = newSemanticContext(location);

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);
  }

  channel.appendLine('Handled document: ' + document.uri.fsPath);

  return {
    $: $TextDocumentAnalyzer(),
    documentUri: newUri(newText(document.uri.fsPath)),
    statements,

    findClosestNode<T extends Node = Node>(
      predicate: (node: Node) => node is T,
      position: TextPosition,
    ): T | Nothing {
      const node = this.findNode(position);

      if (!node) {
        return nothing;
      }

      return findClosestNode(predicate, node);
    },

    findNode(position: TextPosition): Node | Nothing {
      return findNode(this.statements, position);
    },

    getHighlights() {
      const highlightContext = newHighlightContext();

      for (const statement of this.statements) {
        statement.highlight && statement.highlight(highlightContext);
      }

      return highlightContext.highlights;
    },

    getDiagnostics() {
      const diagnosticContext = newDiagnosticContext();

      for (const statement of this.statements) {
        statement.diagnose && statement.diagnose(diagnosticContext);
      }

      return diagnosticContext.diagnostics;
    },
  };
}

export function findStatementNode(
  body: ArrayData<StatementNode>,
  position: TextPosition,
): StatementNode | Nothing {
  for (const statement of body) {
    if (statement.range.contains(position)) {
      if (statement.body) {
        return findStatementNode(statement.body, position);
      }

      return statement;
    }
  }

  return nothing;
}

export function findNode(statements: ArrayData<StatementNode>, position: TextPosition): Node | Nothing {
  const statement = findStatementNode(statements, position);

  return statement ? findChildNode(statement, position) : nothing;
}

export function findClosestNode<T extends Node = Node>(
  predicate: (node: Node) => node is T,
  node: Node,
): T | Nothing {
  if (predicate(node)) {
    return node;
  }

  if (!node.parent) {
    return nothing;
  }

  return findClosestNode(predicate, node.parent);
}

function findChildNode(parent: Node, position: TextPosition): Node | Nothing {
  if (!parent.children) {
    return parent;
  }

  for (const node of parent.children) {
    if (node.range.contains(position)) {
      return findChildNode(node, position);
    }
  }

  return nothing;
}
