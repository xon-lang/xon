import {OutputChannel, Position, Range, TextDocument, TextEdit} from 'vscode';
import {Formatter} from '../../core/formatter/formatter';
import {Array2, Nothing, String2, nothing} from '../../core/lib/core';
import {Node} from '../../core/parser/node/node';
import {StatementNode} from '../../core/parser/node/syntax/statement/statement-node';
import {parseSyntax} from '../../core/parser/syntax';
import {SyntaxResult} from '../../core/parser/syntax-result';
import {parseSemantic} from '../../core/semantic/semantic';
import {createSource} from '../../core/source/source';
import {SourcePosition} from '../../core/source/source-position';
import {SourceRange} from '../../core/source/source-range';

export function convertFormatter(formatter: Formatter) {
  return TextEdit.replace(convertRange(formatter.range), formatter.text);
}

export function convertRange(range: SourceRange): Range {
  const start = convertPosition(range.start);
  const stop = convertPosition(range.stop);

  return new Range(start, stop);
}

export function convertPosition(position: SourcePosition): Position {
  return new Position(position.line, position.column);
}

const cachedSyntax: Record<String2, SyntaxResult> = {};

export function getDocumentSyntax(document: TextDocument, channel: OutputChannel): SyntaxResult {
  const text = document.getText();

  const foundSyntax = cachedSyntax[text];

  if (foundSyntax) {
    return foundSyntax;
  }

  // todo should be const location = document.uri.toString();
  const location = document.uri.fsPath;
  const source = createSource(location, text);
  const syntax = parseSyntax(source);
  // const corePath = join(__dirname, '/core/lib/@xon/core/test-core.xon');
  // const semanticConfig = createSemanticConfig({corePath});
  parseSemantic(syntax);
  cachedSyntax[document.uri.toString()] = syntax;

  return syntax;
}

export function findNodeByPositionInSyntax(syntax: SyntaxResult, position: Position): Node | Nothing {
  const statement = findStatementNodeByPosition(syntax.statements, position);

  if (!statement) {
    return nothing;
  }

  return findNodeByPosition(statement, position);
}

export function findNodeByPosition(node: Node, position: Position): Node {
  if (!node.children) {
    return node;
  }

  const child = node.children.find((x) => {
    const start = convertPosition(x.range.start);
    const stop = convertPosition(x.range.stop);

    return position.isAfterOrEqual(start) && position.isBeforeOrEqual(stop);
  });

  if (!child) {
    return node;
  }

  return findNodeByPosition(child, position);
}

// todo move function to core and optimize (use body last statement for range checking)
export function findStatementNodeByPosition(
  statements: Array2<StatementNode>,
  position: Position,
): StatementNode | Nothing {
  if (statements.length === 0) return nothing;

  for (const statement of statements) {
    const start = convertPosition(statement.range.start);
    const stop = convertPosition(statement.range.stop);

    if (position.isAfterOrEqual(start) && position.isBeforeOrEqual(stop)) {
      return statement;
    }

    const foundInBody = findStatementNodeByPosition(statement.body, position);

    if (foundInBody) {
      return foundInBody;
    }
  }

  return nothing;
}
