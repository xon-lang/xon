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
import {ArrayData, newText, nothing, Nothing, TextPosition} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';
import {$VscodeType} from '#vscode';
import {OutputChannel, TextDocument} from 'vscode';

export type TextDocumentAnalyzer = Model &
  Brand<'Analyzer.TextDocumentAnalyzer'> & {
    statements: ArrayData<StatementNode>;
    highlights: ArrayData<HighlightToken>;
    diagnostics: ArrayData<AnalyzerDiagnostic>;

    findNode(position: TextPosition): Node | Nothing;
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
  const highlightContext = newHighlightContext();
  const diagnosticContext = newDiagnosticContext();

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);
    statement.highlight && statement.highlight(highlightContext);
    statement.diagnose && statement.diagnose(diagnosticContext);
  }

  channel.appendLine('Handled document: ' + document.uri.fsPath);

  return {
    $: $TextDocumentAnalyzer(),
    statements,
    highlights: highlightContext.highlights,
    diagnostics: diagnosticContext.diagnostics,

    findNode(position: TextPosition): Node | Nothing {
      const statement = findChildStatementNode(this.statements, position);

      return statement ? findChildNode(statement, position) : nothing;
    },
  };
}

function findChildStatementNode(
  body: ArrayData<StatementNode>,
  position: TextPosition,
): StatementNode | Nothing {
  for (const statement of body) {
    if (statement.range.contains(position)) {
      if (statement.body) {
        return findChildStatementNode(statement.body, position);
      }

      return statement;
    }
  }

  return nothing;
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
