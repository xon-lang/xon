import {join} from 'path';
import {OutputChannel, Position, Range, TextDocument, TextEdit} from 'vscode';
import {Formatter} from '../../core/formatter/formatter';
import {Nothing, nothing} from '../../core/lib/core';
import {Node} from '../../core/parser/node/node';
import {StatementNode} from '../../core/parser/node/syntax/statement/statement-node';
import {parseSyntax} from '../../core/parser/syntax';
import {SyntaxResult} from '../../core/parser/syntax-result';
import {parseSemantic} from '../../core/semantic/semantic';
import {createSemanticConfig} from '../../core/semantic/semantic-config';
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

export function getDocumentSyntax(document: TextDocument, channel: OutputChannel): SyntaxResult {
  try {
    const text = document.getText();
    const location = document.uri.toString();
    const source = createSource(location, text);
    const syntax = parseSyntax(source);
    const coreDir = join(__dirname, '/core/lib/@xon/core/test-core.xon');
    const semanticConfig = createSemanticConfig({coreDir});
    parseSemantic(syntax, semanticConfig);

    return syntax;
  } catch (error) {
    channel.appendLine(error?.toString() ?? 'Some error');

    throw new Error('Not implemented');
  }
}

export function findNodeBytPositionInSyntax(syntax: SyntaxResult, position: Position): Node | Nothing {
  const statement = findStatementNodeByPosition(syntax.statements, position);

  if (!statement) {
    return nothing;
  }

  return findNodeByPosition(statement, position);
}

// todo move function to core
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
export function findStatementNodeByPosition(statements: StatementNode[], position: Position): StatementNode | Nothing {
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
