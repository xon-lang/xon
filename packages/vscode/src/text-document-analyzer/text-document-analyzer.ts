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
      // todo use body node
      return this.statements.firstMap((x) => findNode(x, position));
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

function findNode(parent: Node, position: TextPosition): Node | Nothing {
  if (parent.range.contains(position)) {
    if (parent.children) {
      for (const node of parent.children) {
        if (node.range.contains(position)) {
          return findNode(node, position);
        }
      }
    }

    return parent;
  }

  return nothing;
}
